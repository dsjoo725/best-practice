import { renderHook } from "@testing-library/react";
import { useHistoryState } from "./use-history-state";
import { act } from "react";

describe("useHistoryState", () => {
  describe("undo", () => {
    it("여러 번 값이 변경된 상태에서, 연속으로 undo를 실행하면, 순차적으로 이전 값들로 되돌아가야 한다", () => {
      // Given
      const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));

      // When
      act(() => {
        result.current[1](1);
        result.current[1](2);
        result.current[1](3);
      });

      // Then
      act(() => {
        result.current[2].undo();
      });
      expect(result.current[0]).toBe(2);

      act(() => {
        result.current[2].undo();
      });
      expect(result.current[0]).toBe(1);

      act(() => {
        result.current[2].undo();
      });
      expect(result.current[0]).toBe(0);
    });

    it("undo할 수 없는 상태에서, undo를 실행하면, 아무 변화가 없어야 한다", () => {
      // Given
      const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));

      // When
      act(() => {
        result.current[2].undo();
      });

      // Then
      expect(result.current[0]).toBe(0);
      expect(result.current[2].canUndo).toBe(false);
      expect(result.current[2].canRedo).toBe(false);
    });
  });

  describe("redo", () => {
    it("여러 번 undo한 상태에서, 연속으로 redo를 실행하면, 순차적으로 앞으로 되돌아가야 한다", () => {
      // Given
      const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));

      // When
      act(() => {
        result.current[1](1);
        result.current[1](2);
        result.current[1](3);
        result.current[2].undo();
        result.current[2].undo();
        result.current[2].undo();
      });

      // Then
      act(() => {
        result.current[2].redo();
      });
      expect(result.current[0]).toBe(1);

      act(() => {
        result.current[2].redo();
      });
      expect(result.current[0]).toBe(2);

      act(() => {
        result.current[2].redo();
      });
      expect(result.current[0]).toBe(3);
    });

    it("redo할 수 없는 상태에서, redo를 실행하면, 아무 변화가 없어야 한다", () => {
      // Given
      const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));
      act(() => {
        result.current[1](1);
      });

      // When
      act(() => {
        result.current[2].redo();
      });

      // Then
      expect(result.current[0]).toBe(1);
      expect(result.current[2].canUndo).toBe(true);
      expect(result.current[2].canRedo).toBe(false);
    });
  });

  describe("reset", () => {
    it("값이 여러 번 변경된 상태에서, reset을 실행하면, 초기값으로 되돌아가고 히스토리가 초기화되어야 한다", () => {
      // Given
      const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));

      // When
      act(() => {
        result.current[1](1);
        result.current[1](2);
        result.current[1](3);
        result.current[2].reset();
      });

      // Then
      expect(result.current[0]).toBe(0);
      expect(result.current[2].canUndo).toBe(false);
      expect(result.current[2].canRedo).toBe(false);
    });
  });

  it("undo/redo 중간 상태에서, 새 값을 설정하면, Then 이후 히스토리가 제거되고 새 분기가 생성되어야 한다", () => {
    // Given
    const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));
    act(() => {
      result.current[1](1);
      result.current[1](2);
      result.current[1](3);
      result.current[2].undo();
      result.current[2].undo();
    });

    // When
    act(() => {
      result.current[1](4);
    });

    // Then
    expect(result.current[0]).toBe(4);
    expect(result.current[2].canUndo).toBe(true);
    expect(result.current[2].canRedo).toBe(false);
  });

  it("용량 제한 상태에서, 값을 변경하면, 이전 히스토리가 제거되어야 한다", () => {
    // Given
    const { result } = renderHook(() => useHistoryState({ defaultProp: 0, capacity: 2 }));
    act(() => {
      result.current[1](1);
    });

    // When
    act(() => {
      result.current[1](2);
      result.current[2].undo();
    });

    // Then
    expect(result.current[0]).toBe(1);
    expect(result.current[2].canUndo).toBe(false);
    expect(result.current[2].canRedo).toBe(true);
  });

  it("현재 값과, 동일한 값으로 setValue를 실행하면, 히스토리에 추가되지 않아야 한다", () => {
    // Given
    const { result } = renderHook(() => useHistoryState({ defaultProp: 0 }));

    // When
    act(() => {
      result.current[1](0);
    });

    // Then
    expect(result.current[0]).toBe(0);
    expect(result.current[2].canUndo).toBe(false);
    expect(result.current[2].canRedo).toBe(false);
  });

  it("히스토리가 있는 상태에서, 기본값이 변경되면, 히스토리가 초기화되고 새 기본값이 설정되어야 한다", () => {
    // Given
    const { result, rerender } = renderHook(
      ({ initialValue }) => useHistoryState({ defaultProp: initialValue }),
      {
        initialProps: { initialValue: 0 },
      }
    );

    act(() => {
      result.current[1](1);
      result.current[1](2);
    });

    // When
    rerender({ initialValue: 3 });

    // Then
    expect(result.current[0]).toBe(3);
    expect(result.current[2].canUndo).toBe(false);
    expect(result.current[2].canRedo).toBe(true); // 테스트 실패
  });
});
