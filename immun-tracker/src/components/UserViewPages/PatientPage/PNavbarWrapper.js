import styled from "styled-components";

import img from "./daiga-ellaby-154931-unsplash-min.jpg";

export const PNavbarWrapper = styled.div`
  .navbar {
      background: linear-gradient(to right, #0077c2, #80d6ff );
      color: #ffff74;
      .logo{
          color: #ffd740;
          text-decoration: none;
      }
      .mr-2{
          background:#ffd740;
          outline: none; 
      }
      .link{
        color: #ffd740;
        text-decoration: none;
      }
  }
`;


export const PatientWrapper = styled.div`
  .jumbotron {
    background-image: url(${img});
    background-color: #cccccc;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: cover;
    h1 {
      color: #ffd740;

      font-weight: 600;
    }
    p {
      color: #ffd740;

      font-weight: 600;
    }
  }
  .cardContainer {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    .card {
      margin: 13px;
      width: 50%;
    }
  }
  .button, button  {
    background: linear-gradient(to right, #80d6ff, #0077c2);
    border: none;
    border-radius: 5px;
    color: white;
    padding: 11px 23px;
  }
`;

export const Footer = styled.div`
       .nav{
        background: linear-gradient(to right, #0077c2, #80d6ff );
        display: flex;
        margin-top: 39px;
        justify-content: center;
        a{
            color: #ffff74;
        }
       }
`