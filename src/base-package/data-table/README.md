## DataTable 컴포넌트

@tanstack/react-table 기반의 공용 테이블 컴포넌트
행 데이터(rows)와 컬럼 정의(columns)를 전달하면 기본 테이블 UI 렌더링

### Props 정의

| 이름           | 타입                         | 설명                            |
| -------------- | ---------------------------- | ------------------------------- |
| `columns`      | `ColumnDef<TData, TValue>[]` | 테이블의 컬럼 정의              |
| `rows`         | `TData[]`                    | 외부 제어형 데이터 (Controlled) |
| `defaultRows`  | `TData[]`                    | 내부 초기 데이터 (Uncontrolled) |
| `onRowsChange` | `(updater) => void`          | 행 데이터 변경 시 호출되는 콜백 |

### Column Meta 정의

컬럼 정의 시 meta 속성을 통해 추가적인 컴럼 속성 정의

| 이름    | 타입                            | 설명                          |
| ------- | ------------------------------- | ----------------------------- |
| `align` | `'left' \| 'center' \| 'right'` | 셀 및 헤더의 텍스트 정렬 방식 |
