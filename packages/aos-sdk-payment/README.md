# @allofshop/aos-sdk-payment

> aos sdk for webbrowser.

## Install

Using npm:

```sh
npm install @allofshop/aos-sdk-nodejs
```

or using yarn:

```sh
yarn add @allofshop/aos-sdk-nodejs
```

## Using

```html
<html>
  <body>
    <script
      type="text/javascript"
      src="https://code.jquery.com/jquery-1.12.4.min.js"
    ></script>
    <script src="../dist/aos-payment-sdk.js"></script>
    <script>
      AosPaymentSdk.init({
        shopId: 'b07e7fad-b8a6-4086-b68e-2796b3b3f826',
        accessToken:
          'eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ijk1OTA2MmUzLWVjZDktNDMyNy1hMGI0LTc4MTgyNjQyZjg2ZSJ9.eyJpYXQiOjE2MTM2MzY3NDksImF6cCI6IjVmYmIzOGU2Yzk1MTViMGVlZjRjNWI3OCIsImF6cGFjciI6IjAiLCJuYmYiOjE2MTM2MzY3NDksImV4cCI6MTYxMzcyMzE0OSwiYXVkIjoiNWZiYjM4ZTZjOTUxNWIwZWVmNGM1Yjc4IiwiaXNzIjoiaHR0cHM6Ly9hcGkuYWxsb2Yuc2hvcCIsInN1YiI6IjYwMjEwN2IwMzhmNWM2OGE0MzA2YTRlNiIsImp0aSI6IjYwMmUyNDhkY2RkOWIwMzEwZTk5OTZhMSJ9.p7zc4nNSniCDLBqgASgxD5wbpZJBHPxATCN33yMw0Er96X5KcKiD8Na3H7FXXbY7cLAvcnNIuZ0hrUK7jRTLNQ',
      });
      AosPaymentSdk.pay(
        {
          orderId: '602e24a4cdd9b0310e9996b2',
          productName: 'testProduct',
          orderer: {
            name: '주문자이름',
            homePhone: '집전화',
            mobilePhone: '핸드폰',
            email: 'help@corretto.io',
          },
          recipient: {
            name: '받는사람',
            homePhone: '받는곳전화',
            mobilePhone: '받는곳핸드폰',
          },
          couponIds: [],
          usingMileage: 0,
          address: {
            zipCode: '우편번호',
            basic: '기본주소',
            locality: '시/도',
            region: '지역',
          },
          payment: {
            type: 'PG-CARD',
            pgId: '602e251f4fd35e555431946e',
          },
        },
        function(res) {
          console.log(res);
        },
      );
    </script>
  </body>
</html>
```
