import React, { memo } from "react"
import * as S from "./styled"

const DonateModal = ({ hideModal }) => {
  return (
    <S.DonateModalWrapper className="modal">
      <div className="modal-content">
        <span onClick={hideModal} className="close">
          ×
        </span>

        <div className="donate_buttons">
          <a
            href="https://link.pagar.me/lrySIp6Xkd"
            className="panel_3_button donate_button"
          >
            R$20,00
          </a>
          <a
            href="https://link.pagar.me/lBkxHIpp7Jd"
            className="panel_3_button donate_button"
          >
            R$50,00
          </a>
          <a
            href="https://link.pagar.me/lHkbB86pmkO"
            className="panel_3_button donate_button"
          >
            R$90,00
          </a>
          <a
            href="https://link.pagar.me/lrkS8a6X1O"
            className="panel_3_button donate_button"
          >
            R$100,00
          </a>
          <a
            href="https://link.pagar.me/lBJeSLaa7ku"
            className="panel_3_button donate_button"
          >
            R$180,00
          </a>
          <a
            href="https://link.pagar.me/lr1xBIp67yO"
            className="panel_3_button donate_button"
          >
            R$200,00
          </a>
          <a
            href="https://link.pagar.me/lB1eBUaamyu"
            className="panel_3_button donate_button"
          >
            R$270,00
          </a>
          <a
            href="https://link.pagar.me/lrkrLpaQyu"
            className="panel_3_button donate_button"
          >
            R$500,00
          </a>
          <a
            href="https://link.pagar.me/lH1BL6pX1O"
            className="panel_3_button donate_button"
          >
            R$1.000,00
          </a>
          <a
            href="https://link.pagar.me/lBJBUa6XyO"
            className="panel_3_button donate_button"
          >
            R$5.000,00
          </a>
        </div>
      </div>
    </S.DonateModalWrapper>
  )
}

export default memo(DonateModal)
