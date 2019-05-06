# MessageServer

Example of Application to send email

### Use

Example of json request
```javascript
{
  "conf": {
    "host": "smtp.gmail.com",
    "port": 465,
    "secure": true,
    "auth": {
      "user": "adress1@gmail.com",
      "pass": "password"
    }
  },
  "mail": {
    "from": "adress1@gmail.com",
    "to": "adress2@gmail.com",
    "subject": "Sending Email using Node.js",
    "text": "That was easy!"
  }
}
```

in case of using gmail  https://myaccount.google.com/u/1/lesssecureapps?pageId=none

for more information look at https://nodemailer.com/about/
