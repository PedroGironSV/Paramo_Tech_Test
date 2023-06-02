**User Registration and Login - Web Automation Project**

Technical test for Paramo Technologies team, using as automation stack the following technologies:

- JavaScript
- Cypress
- Cucumber (Gherkin language)
- Node JS

**Local configuration requirements**

 - [Install Visual Studio Code](https://code.visualstudio.com/download)
 - [Install Node JS](https://nodejs.org/en)
 - Add the following plugin on VS Code:

```
Cucumber (Gherkin) Full Support
```
![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhJ9_ljOrxrLIRfShmahTPZjHmRqEdmiQRB_frHxEgUWtqPLtCIj0ThuAdJ_ii5lgQQxMKUk2WH3ZatPCOAWYTrwiCZSfdJ4a4E9j8I5yonmBhBpZpol5XBFjuYjDL6ofDRCwz-nOaZ5Ay53QFoKX3BVDEloX7YalHcwD0mqI18VKLKWtUIEpc2Gbi4jg/w640-h264/Cucumber_Ext.PNG)

**Run the automated test**

 - Clone the repo
 
```
git clone https://github.com/PedroGironSV/Paramo_Tech_Test
```
- Open the project on VS Code
- Open a new Terminal
- Install Cypress with the following command:

```
npx cypress install
```

- Execute the command:

```
npm test
```

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHtKLbecRHaL_6hbkqT5nKvFoldwWX0xi4Z8OcIF_sEhgp6SnnQEZjSmxQdZHDvb2jAOo9K9OJobc2D59nc40UwqlT_VWRcKgsU4qIgZfC8KljX6NH2aX3rYg9tEVc0M--b3SAEuurEm3N9PTCiSaVtgfy7CyZwi7_gRg_PTpj58FnhzHCL-TP6gEtng/w640-h360/5%20start.PNG)


- Wait for a few seconds until Cypress tool get opened
- Select E2E Testing

 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgZ5Uc9M6qR5rPXSB9EwaB8a2EoE4D8EB4CFFK_QQzAaSYLcXyyp_30aKnKu-RZIELhjWfuhaRBdQL3jJ6lOEkWBoE19pkobiccRyY2HRjBbgK5wRdWtcpHWSstvJsCqpRtRDb5ccEBINH6lWmJXCBJXJXpTTHhcyv89jMAN4zdlfMf2zgBsbGK9TVztg/w640-h416/6%20e2e.PNG)

- Choose a browser to run the test

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjyEHxOC_rzdt8ccTTB-lXTDw2CegOfKILZgaHfJaUoLZAkyeEdM2PncHQtNnxnu63uvIJ_XgQrT5jtO_pMcSdWD91aX3vCG9ACEBK9PT4nWm59LssGJkHnJd6jFA6P_XbT_Ro6NJw7_5LD6gCxmGyJxf0yA4BfwCAuyrJNQ_Utwf6H9xG4hHoF0MEiMw/w640-h416/7%20browser.PNG)

- Select demo_casino feature to start the test

 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiYImadw2_CyEQKsJCQ0PbV3mT3AXQwElGzd6S-j1sNsvlOA1KNqvBeUcue2MEifZVV3lcg_Macgcoa6CKPNMlSYXVuEFxsdg7N4IcQ86slmCYcDh_F2AEOz-Qgz4BSnevibqOr6J8vlh9oVNb67ZOJaTdzO6cF4ww1B6i70F12E9_hvtR1TMkp9oNsEg/w640-h344/8%20feature.PNG)

- Wait until User Registration and Login scenarios are completed

 ![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEioBXwn2bE6JFxRrLEx5PQUzPS9TGb5gBwivqg34FJFoi17AwRFosP6uBzCj0j8JUggNNX7zUhyHqI9yjDQpKDjScSSxWSFuZhI8jrAw1wfEEKP99XkyF2MHsQ77JYWIJKj-R9kuh5f33FJ0lyXheMMauII0lNVVtxyx4UTVLqO-uUCVytTdscG-30e_w/w640-h346/9%20execution.PNG)
 
 **Internal structure of the project**

- You can find the General Information about the project within the 'package.json' file

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgo3oBd1TByLE05usT7uIidIZZRVryWi7MR6sdIQKUedMoa0gVR8yck7n5hCY-HEUvxwjDBPcHV2AV76XbvcnzuhGPB9rgvcqgUPbW0bF-YyZNCxpfCRT83Yy0JcGkqC2uSfbc0vdxGyyvowM7XvzZ274iZ6iqmFd2LwtbP89tU4Bl4Nj-Vl6X_AZkuCw/w640-h332/1%20general%20info.PNG)

- Implemented Behavior Driven Development (BDD) using Cucumber Scenarios and Gherkin language

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0PUvtZ4Wx8RXpzWw7x6R7n-aNrM9t7UuIxSR9v2ruh4uZu7qQv0c5oYEkvLscx-QFoSyUwt1sJe3o8ZJgqG6zf2zU70oDQHfXEIt2qzokAbxq_xX7kgftnx9WNs38qax7WDvS4FrSDXU1GX7a9bgEaw5li0ZgfvM0u7_JBhT4ilBXqdzE_Par-uWeZw/w640-h312/2%20feature%20file.PNG)

- Find the steps definition within the 'demo_casino' folder
- Open the 'StepsDefinition.js' file

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhfino-Fldi2PloB6-2vj_iL53haXiXVQtZyRzsIpu-u_zjTAzOY9Hh59Pwj5ObhbV3E3ge0TmeE2_oQMtiDUgBxAJNRs1TquW9MpKAxIYn8ddEXfG7SSaKTZJhEtLXatw0GOonXo8jA3ikn7iHTRH_soSQjSgXPqWrR06CC4nP1YJgBclijWgdugF-Bw/w640-h584/3%20steps%20def.PNG)

- Implemented Page Object Model design pattern

![enter image description here](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiIx1OP82Q1DK7Q5aAKyoYtGqKB8lrekutpce2gCLh8sehyKhKQnRbte1RNGixegNg4pseoAYtzap61r1u3nP5C06RVzO4mE0MbapBWyKgzSlg9tHMRLNK6IgLbG6uUMDcCmlz4y87AwpxmnQQzbb2SVjhROh42oELdTOxSIpjRYNVu0ArQBKaAEy-0lQ/w640-h364/4%20pom.PNG)
