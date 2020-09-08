## summary
연결 테스트를 위주로 진행해봤던 슬랙 챗봇(hubot)!
연결-응답 테스트를 위한 간단한 버전이라 context (자동 답변 방식) 처리 방식에 대해서는 고도화가 필요하지만, 재미삼아 테스트 해보시기엔 좋을 듯 합니다. 😎
>
> 대화 처리방식 고도화
> - [naver chatbot](https://www.ncloud.com/product/aiService/chatbot) => [API 설명서](https://docs.ncloud.com/ko/chatbot/chatbot-3-7.html)
> - [google Dialogflow](https://dialogflow.cloud.google.com/#/getStarted) => [API 설명서](https://cloud.google.com/dialogflow/docs/?hl=ko)

## Pre-Setting
1. slack 계정 생성
2. slack 에서 [chatbot](https://slack.com/apps/A0F7XDU93-hubot?next_id=0) 설정
   - HUBOT_SLACK_TOKEN 할당
3. keys.js 파일 생성
    - 파일 내 코드 삽입 
    - token key에 본인의 slack 계정에서 할당받은 API token 입력
```
/*** keys.js ***/
module.exports = {
    botAPIToken: '/* token key */'
}
```
>
## Execution
```
node bot.js
```
>
## User Setting
- /context.js 내 작성된 배열 수정 또는 추가를 통해 챗봇의 답변을 제어할 수 있습니다.
