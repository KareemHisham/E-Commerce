import styled from "styled-components";

export const MyProduct = styled.section`
  .lds-ripple {
    position: absolute !important;
    left: 0;
    top: 0;
    transform: translate(-50%, -50%);
  }
  .product_wrapper {
    .images {
      .main_img {
        img {
          height: 300px;
        }
      }
      .other_imgs {
        ul {
          li {
            flex-basis: 15%;
            img {
              cursor: pointer;
            }
          }
        }
      }
    }
    .product_content {
      .price_wrapper {
        .discount_price {
          span {
            &:not(.discount_percentage) {
              font-size: 20px;
            }
            &.discount_percentage {
              transform: translateY(-10px);
            }
          }
        }
      }
      .purchase_product {
        .quantity {
          button {
            border-color: var(--main_color);
          }
        }
        .msgError {
          padding: 5px;
          margin-top: 20px;
        }
        .btns {
          button {
            &.cart_btn {
              background-color: rgb(249 78 48 / 30%);
              color: var(--main_color);
            }
            &.buy_btn {
              &:hover {
                background-color: var(--main_color);
                color: #fff;
              }
            }
          }
        }
      }
    }
  }
`;
