import styled from "styled-components";


export const LoginWrapper = styled.div`
  .main {
    background-color: #ffffff;
    width: 400px;
    height: auto;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .sign {
    padding-top: 40px;
    color: #df5ba3;
    font-family: "Ubuntu", sans-serif;
    font-weight: bold;
    font-size: 23px;
  }

  .input {
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: left;
    margin-bottom: 27px;
    font-family: "Ubuntu", sans-serif;
  }

  .input:focus {
    border: 2px solid rgba(0, 0, 0, 0.18);
    background: white;
  }

  .submit {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: linear-gradient(to right, #ff6868, #df5ba3);
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: "Ubuntu", sans-serif;
    margin-left: 35%;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
  }

  .forgot {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #e1bee7;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 20px 0;
  }

  .helpLink {
    text-shadow: 0px 0px 3px rgba(117, 117, 117, 0.12);
    color: #e1bee7;
    text-decoration: none;
  }

  .helpLink:hover {
    color: #bf2fd8;
  }
`;
