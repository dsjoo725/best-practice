### Enum-like 타입 정의 규칙

- `enum` 대신 **Literal Type + `as const satisfies`** 조합을 사용합니다.
- 더 가볍고, 더 안전하며, 유지보수가 쉽습니다.
- 규칙
  - 타입명: `PascalCase` (예: `PaymentMethod`)
  - 상수명: `UPPER_SNAKE_CASE` + `_LABELS` suffix
  - 선언 순서: `type` → `const`
  - 검증 방식: `as const satisfies Record<Type, string>`
- 예시
  ```ts
  /** 결제 방식 */
  export type PaymentMethod = 'CARD' | 'CASH' | 'PREPAID';
  export const PAYMENT_METHOD_LABELS = {
    CARD: '카드',
    CASH: '현금',
    PREPAID: '선불',
  } as const satisfies Record<PaymentMethod, string>;
  ```
