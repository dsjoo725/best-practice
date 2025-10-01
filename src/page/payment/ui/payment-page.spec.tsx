import { fireEvent, render, screen } from "@testing-library/react";
import { PaymentPage } from "./payment-page";

describe("PaymentPage", () => {
  it("결제 테이블이 렌더링 되었을 때, 사용자가 Status 셀렉트를 열고 'Pending' 옵션을 클릭하면 해당 행의 상태가 'Success'에서 'Pending'으로 바뀌어야 한다", async () => {
    // Given
    render(<PaymentPage />);
    const triggers = await screen.findAllByRole("combobox", { name: "Status" });
    const trigger = triggers[0];
    expect(trigger.textContent).toBe("Success");

    // When
    fireEvent.click(trigger);
    const option = await screen.findByRole("option", { name: "Pending" });
    fireEvent.click(option);

    //  Then
    expect(trigger.textContent).toBe("Pending");
  });
});
