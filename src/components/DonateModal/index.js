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
            href="https://link.pagar.me/lH1Vo9Yvevd"
            className="panel_3_button donate_button"
          >
            R$20,00
          </a>
          <a
            href="https://link.pagar.me/lBkoqKvewd"
            className="panel_3_button donate_button"
          >
            R$40,00
          </a>
          <a
            href="https://link.pagar.me/lBJxs9tPxwO"
            className="panel_3_button donate_button"
          >
            R$60,00
          </a>
          <a
            href="https://link.pagar.me/lrJicFDgvd"
            className="panel_3_button donate_button"
          >
            R$80,00
          </a>
          <a
            href="https://link.pagar.me/lByi5FvgDd"
            className="panel_3_button donate_button"
          >
            R$100,00
          </a>
          <a
            href="https://link.pagar.me/lHkfoqYDgwO"
            className="panel_3_button donate_button"
          >
            R$160,00
          </a>
          <a
            href="https://link.pagar.me/lSyi9tDlPO"
            className="panel_3_button donate_button"
          >
            R$180,00
          </a>
          <a
            href="https://link.pagar.me/lHJxo5twxwd"
            className="panel_3_button donate_button"
          >
            R$200,00
          </a>
          <a
            href="https://link.pagar.me/lS1j9FDlvu"
            className="panel_3_button donate_button"
          >
            R$400,00
          </a>
          <a
            href="https://link.pagar.me/lH1icKwevO"
            className="panel_3_button donate_button"
          >
            R$500,00
          </a>
          <a
            href="https://link.pagar.me/lB1jqtDgDO"
            className="panel_3_button donate_button"
          >
            R$800,00
          </a>
          <a
            href="https://link.pagar.me/lr1loctPxPu"
            className="panel_3_button donate_button"
          >
            R$1000,00
          </a>
          <a
            href="https://link.pagar.me/lryls5KPlvu"
            className="panel_3_button donate_button"
          >
            R$1600,00
          </a>
          <a
            href="https://link.pagar.me/lBJlocFwgPd"
            className="panel_3_button donate_button"
          >
            R$2000,00
          </a>
          <a
            href="https://link.pagar.me/lB1xs9FDgDO"
            className="panel_3_button donate_button"
          >
            R$3200,00
          </a>
          <a
            href="https://link.pagar.me/lS1ocYDgwO"
            className="panel_3_button donate_button"
          >
            R$5000,00
          </a>
        </div>
      </div>
    </S.DonateModalWrapper>
  )
}

export default memo(DonateModal)
