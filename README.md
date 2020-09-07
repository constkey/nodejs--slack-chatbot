## 개요
연결 테스트를 위주로 진행해봤던 슬랙 챗봇입니다.
아주 간소화된 버전이라 context (자동 답변 방식) 처리 방식에 대해서는
고도화가 필요하지만 재미삼아 사용 보시기에 무리 없을 듯 합니다 😎
>
## Pre-Setting
1. slack 에서 [chatbot](https://slack.com/apps/A0F7XDU93-hubot?next_id=0) 설정
   - HUBOT_SLACK_TOKEN 할당
2. keys.js 파일 생성
    - 파일 내 코드 삽입 
    - token key에 본인의 slack 계정에서 할당받은 API token 입력
```
// keys.js
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

