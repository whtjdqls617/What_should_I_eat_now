

/*



1. 닉네임 넣는 부분
	- state: visible = false면 text가 안 보임 true면 보임(<= 서버에서 보낸 답에 의해 결정, default: false)

	- 입력창
	- <Text>"닉네임을 새로 입력해주세요"
	- 중복확인 버튼: 누르면 서버에 입력값 GET으로 보냄
		++ getData(url, data) 매개변수 추가 수정해야 함
		++ 중복확인 버튼마다 다른 url이 부여되어야 함 -> hyahn님과 추가적으로 이야기 나누기

2. 이메일 넣는 부분
	- state: visible = false면 text가 안 보임 true면 보임(<= 서버에서 보낸 답에 의해 결정, default: false)
	- state: modalvisible ""

	- 이메일 양식 확인하는 함수
		- @랑 .이 있는지

	- 입력창
	- 팝업창(<= 이메일이 중복인 경우에 modalvisible이 true가 되고 팝업창이 보이게 됨)
		- "이미 가입된 이메일입니다"
		- 닫기 버튼(modalvisible 다시 false로 바꿈 -> 팝업창 끄기)
	- <Text>"이메일 양식에 맞게 적어주세요"
	- 중복확인 버튼: 누르면 (1) 이메일 양식 확인하는 함수로 입력값 체크(결과값이 true면 서버 전송, false면 visible만 true로 세팅) 서버에 입력값 GET으로 보냄


3. 비밀번호 입력하는 부분
	- state: visible = false면 text가 안 보임 true면 보임(<= 비밀번호 양식 확인하는 함수 답에 의해 결정, default: false)
	- state: visible2 = false면 text가 안 보임 true면 보임(<= 비밀번호 일치여부 확인하는 함수 답에 의해 결정, default: false)


	- 비밀번호 양식 확인하는 함수
		- 8~20글자
	- 비밀번호 일치 여부 확인하는 함수
		- strcmp함수

	- 입력창
	- <Text>"8~20글자로 입력해주세요"

   비밀번호 한번 더 확인차 입력하는 부분
	- <Text>"비밀번호가 일치하지 않습니다"

질문 페이지로 넘어가는 버튼
	- onPress : 서버에 주고 다음 페이지로 넘어가기




*/