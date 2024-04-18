# 1️⃣ 프로젝트 개요

## 1. 주제 선정 배경
- 해외 블록체인 STO 산업의 활성화 (약 150 달러)

- 국내 블록체인 STO 산업은 아직 법제화가 되지 않은 상황. 다만, 카사, 뮤직 카우 등 몇몇 선도 기업이 시행 운행중 → 추후에, 산업이 활성화 될 경우, 블루오션

- 부동산 자산을 STO 토큰으로 ‘발행(청약)’ 하고 ‘거래’ 할 수 있는 DAO 기반의 STO 플랫폼 개발

<br>

## 2. 프로젝트 목표
- 블록체인 네트워크 활용하여 ‘STO 토큰 발행’, ‘청약’, ‘거래’ 및 ‘안건 투표’ 할 수 있게 만들기

- 해당 네트워크 외부에서 거래가 발생할 경우, 이를 트래킹 할 수 있게 하기

  
<br>

## 3. 개발 일정
![](https://i.imgur.com/JgW8Ar4.png)


<br>
<br>
  
# 2️⃣ 주요 기능 및 UI

| 구분         | 설명                                                                                                    |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| STO 토큰 발행  | [Admin] 유저가 소유하고 있는 부동산을 DB에 등록하고, 관리자의 승인을 받으면, STO 토큰으로 등록될 수 있음                                    |
| STO 토큰 청약  | [User] 부동산 소유주가 등록한 부동산을 n개의 토큰으로 분할하고, 이를 청약하는 기능. 공모일까지 00 개의 청약을 완료하면 100% 청약 달성                   |
| STO 토큰 거래  | [User] 청약 완료 된 후, 사용자 마켓 페이지에서 거래를 진행할 수 있음. 현재 시가, 최근 7일 간의 시세 등을 반영하여 의사결정할 수 있음                    |
| 투표         | [Admin 및 User] 해당 토큰을 갖고 있는 유저가 안건을 제시하고, Admin이 그 중 일부에 대한 안건을 투표로 상정하여, 해당 부동산에 대한 의사결정을 투표를 통해 결정함 |
| Admin 게시판  | [Admin] 사용자, 청약, 거래, 게시글에 대한 정보를 조회할 수 있고, 투표 등록, 게시글 등록, 블랙리스트 유저 등록, 매물 등록, 청약 등록 등의 기능             |
| Admin 대시보드 | [Admin] 최근 7일간의 매출, 공모금액, 거래금액, 회원가입수, 블랙리스트 유저, 최근 거래 등에 대한 확인                                       |

<details>
  <summary> 📚 UI 상세  </summary>
![](https://i.imgur.com/P1MqCsj.jpeg)

![](https://i.imgur.com/IztWRKN.jpeg)

![](https://i.imgur.com/bnkE1pZ.jpeg)


![](https://i.imgur.com/UlGDEc5.jpeg)

![](https://i.imgur.com/B719Wuz.jpeg)

![](https://i.imgur.com/XQSw1iL.jpeg)

</details>

 
<br>
<br>

# 3️⃣ 역할 및 주요 기술 과제 

<br>

[역할]  Admin 페이지 제작(Frontend) & 프로젝트 UI/UX 기획

<br>

| 구분                                   | 설명                                                                                                                       |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| [FE] 데이터 바인딩 및 인터랙션 UI 구현 | - 렌더링은 주로 static site generation을 사용 <br>- searchParams 사용하여 모달창 구현 dynamic routes 통해 동적 라우팅 구현 |
| [FE] 데이터 시각화                     | Chartjs 의 custom tooltip content 활용하여 디자인 커스텀 한 후 시각화                                                      |
| [FE] 퍼블리싱                          | figma 로 제작된 UI를 Tailwind 를 사용하여 컴포넌트 제작 grid template 사용하여 레이아웃 제작                               |
| [FE] UI 와이어프레임                   | 협약 기업의 니즈를 반영하여 figma 로 와이어프레임 제작                                                                     |

  <br>
  <br>
  

# 4️⃣ 협업 방식


| 구분      | 설명                                                        |                                                                                            |
| ------- | --------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 프로젝트 관리 | 노션 이슈트래킹, 칸반보드, 간트차트, 스프린트 등의 기능을 적극 활용하여 프로젝트 관리         | [📚프로젝트 관리 노션 링크](https://www.notion.so/Gant-chart-8c549ada55a64699adf6486b26cddc8d?pvs=4) |
| 버전 관리   | Release branch, Dev branch 및 페이지별 branch 운영을 통해 체계적인 버전관리 |                                                                                            |


<br>
<br>


# 5️⃣ 시연
![](https://i.imgur.com/USyV2Bw.png)
[🔗유튜브 시연 링크](https://youtu.be/Yr30Bfl_KfE?si=e-mbV78b1Xo5DG0o)

  
<br>
<br>

# 6️⃣ 산출물


| 구분                                                                                                                                                                          |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [User flow](https://tropical-trouser-a8d.notion.site/User-flow-b20843090262417fa2bc877dc2a46520?pvs=4)                                                                      |
| [어드민 요구사항 정의](https://docs.google.com/spreadsheets/d/12ZmKxAXc7FT7kGRa6ppcQjZ4lxzcqKPNQoAOcQuES2U/edit#gid=0)                                                               |
| [ERD](https://dbdiagram.io/d/6541ab467d8bbd64653cf50b)                                                                                                                      |
| [시퀀스 다이어그램](https://dbdiagram.io/d/6541ab467d8bbd64653cf50b)                                                                                                                |
| [API 문서](https://docs.google.com/spreadsheets/d/1iFLJDipgi4e4pgQSRhGDqBqiKsqijfc35rkt_J2TOSE/edit?usp=sharing)                                                              |
| [UI/UX 기획](https://www.figma.com/file/aBMZ7hFxCcddiVapcRQxbY/bounceCode_STO%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?type=design&node-id=1%3A2&mode=design&t=qqG7J3A75UDOs5ka-1) |
| [사용자 배포 링크](https://bouncesto.site/home)                                                                                                                                    |
| [어드민 배포 링크](https://bs.admin.bouncesto.site/admin/dashboard)                                                                                                                |

<br>
<br>



# 7️⃣ 프로젝트 시작하기 
``` BASH
# 프론트 실행
# adminfrontend > admin 에서
num run dev

# 임시 백엔드 실행
# adminfrontend > admin 에서
npx json-server --port 9999 --watch db.json

# [주의] 2개 동시에 열려 있어야 함

```
