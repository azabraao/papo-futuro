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
            href="https://link.pagar.me/lr1G1QdRAXu"
            className="panel_3_button donate_button"
          >
            R$20,00
          </a>
          <a
            href="https://link.pagar.me/lrJRfd0AQd"
            className="panel_3_button donate_button"
          >
            R$40,00
          </a>
          {/* <a
            href="https://link.pagar.me/lBkxHIpp7Jd"
            className="panel_3_button donate_button"
          >
            R$50,00
          </a> */}
          <a
            href="https://link.pagar.me/lByK0GOCRQO"
            className="panel_3_button donate_button"
          >
            R$60,00
          </a>
          <a
            href="https://link.pagar.me/lrkCfd00mu"
            className="panel_3_button donate_button"
          >
            R$80,00
          </a>
          {/* <a
            href="https://link.pagar.me/lHkbB86pmkO"
            className="panel_3_button donate_button"
          >
            R$90,00
          </a> */}
          <a
            href="https://link.pagar.me/lSygCzdCCQu"
            className="panel_3_button donate_button"
          >
            R$100,00
          </a>
          <a
            href="https://link.pagar.me/lrkSRMOA0Qu"
            className="panel_3_button donate_button"
          >
            R$160,00
          </a>
          <a
            href="https://link.pagar.me/lBJeSLaa7ku"
            className="panel_3_button donate_button"
          >
            R$180,00
          </a>
          <a
            href="https://link.pagar.me/lB1RGu0CQu"
            className="panel_3_button donate_button"
          >
            R$200,00
          </a>
          {/* <a
            href="https://link.pagar.me/lB1eBUaamyu"
            className="panel_3_button donate_button"
          >
            R$270,00
          </a> */}
          <a
            href="https://link.pagar.me/lr1lAfdCRmO"
            className="panel_3_button donate_button"
          >
            R$400,00
          </a>
          <a
            href="https://link.pagar.me/lrkrLpaQyu"
            className="panel_3_button donate_button"
          >
            R$500,00
          </a>
          <a
            href="https://link.pagar.me/lryCzdCRmd"
            className="panel_3_button donate_button"
          >
            R$800,00
          </a>
          <a
            href="https://link.pagar.me/lH1BL6pX1O"
            className="panel_3_button donate_button"
          >
            R$1.000,00
          </a>
          <a
            href="https://link.pagar.me/lr1xCGOCAQu"
            className="panel_3_button donate_button"
          >
            R$1600,00
          </a>
          <a
            href="https://link.pagar.me/lSkRGOAAQu"
            className="panel_3_button donate_button"
          >
            R$2000,00
          </a>
          <a
            href="https://link.pagar.me/lr10zdAR7u"
            className="panel_3_button donate_button"
          >
            R$3200,00
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
