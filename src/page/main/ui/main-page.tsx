import { useEffect, useState } from "react";
import { TASK_PRIORITY, TASK_STATUS, TaskTableData, type Task } from "@/entity";

export const MainPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      const titles: string[] = [
        "라벨 프린터 펌웨어 v1.2.3 배포 전 검증 시나리오 작성",
        "POS 영수증 템플릿 VAT 표기 로직 수정 및 회계팀 확인",
        "Web Print SDK 로고 Base64 압축(퀄리티 0.7) 적용",
        "Konva 테이블 에디터 그룹 리사이즈 스냅 오차 ±1px로 개선",
        "프린터 연결 타임아웃 후 모델명 재시도(3회, 지수 백오프) 추가",
        "TimezoneCategory 데이터그리드 CRUD 저장 플로우 연결",
        "React Query 캐시 무효화 규칙 정의 및 리스트 refetch 정리",
        "Zod v4 스키마 ↔ 도메인 모델 정합성 검증 테스트 추가",
        "dnd-kit 멀티 드래그 키보드 접근성(Arrow/Shift+Select) 보완",
        "CI: pnpm 워크스페이스 캐시 최적화 및 빌드 시간 측정 대시보드",

        "라벨 에디터 캔버스 확대/축소 성능 최적화",
        "TableArtist 멀티셀 병합/해제 기능 추가",
        "Shop 단위 POS 장비 목록 조회 API와 연동",
        "프린터 펌웨어 OTA 업데이트 실패 케이스 로그 수집",
        "세금계산서 PDF 출력 시 다국어 폰트 적용",
        "Device 연결 시 WebSocket keep-alive 주기 조정",
        "검색 필터 패널 기본값 저장 및 불러오기 기능",
        "Upsertable<T> 유틸 제네릭 개선 및 불필요한 any 제거",
        "Brand → Shop 계층형 데이터 트리 렌더링 개선",
        "Zustand 스토어 devtools 네임스페이스 분리",

        "테이블 주문 UI에서 Drag Row 재정렬 기능 추가",
        "라벨 출력 미리보기 캐시 정책 점검",
        "타임존별 영업시간 렌더링 로직 보정",
        "프린터 IP 변경 시 네트워크 재연결 플로우 강화",
        "바코드 타입 enum 프론트 ↔ 백엔드 정합성 확인",
        "LabelArtist Undo/Redo 스택 메모리 누수 점검",
        "React Hook Form + Zod 기반 동적 폼 최적화",
        "프린터 모델별 Status Code 매핑 가이드 정리",
        "빌드 파이프라인 E2E 테스트 시나리오 자동화",
        "Kiosk 장비 설정값 UI ↔ API sync 검증",
      ];

      const next: Task[] = titles.map((title, i) => ({
        id: String(i + 1),
        title,
        status: TASK_STATUS[i % TASK_STATUS.length],
        priority: TASK_PRIORITY[i % TASK_PRIORITY.length],
      }));

      setTasks(next);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full p-4">
      <TaskTableData tasks={tasks} />
    </div>
  );
};
