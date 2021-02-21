import styled from "styled-components"

export const DonateModalWrapper = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */

  .donate_buttons {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  /* Modal Content/Box */
  .modal-content {
    background-color: #fefefe;
    margin: 15% auto; /* 15% from the top and centered */
    padding: 20px;
    border: 1px solid #888;
    width: 80%; /* Could be more or less, depending on screen size */
  }

  .close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }

  .close:hover,
  .close:focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
  .panel_3_button {
    background-color: #003359;
    width: fit-content;
    padding: 1rem 2rem;
    border-radius: 1.5rem;
    margin-top: 2rem;
    letter-spacing: 0.04rem;
    font-size: 1rem;
    color: white;
    text-decoration: none;
    display: block;
  }

  .panel_3_button:hover {
    text-decoration: none;
  }

  .donate_button {
    text-align: center;
    margin-top: 1rem;
    padding: 1rem 0.8rem;
  }
`
