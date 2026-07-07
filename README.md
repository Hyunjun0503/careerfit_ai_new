
# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

취업준비를 하는 학생들은 희망 직무에 지원하기 위해 실무 경험, 자격증 등 어떠한 역량이 필요한지 파악하는데 어려움을 겪고 있습니다.
이러한 문제점을 해결하기 위해 CareerFit AI를 개발했고 이는 실제 채용공고를 바탕으로 사용자의 전공, 보유기술, 관심 직무를 분석하는 서비스입니다. 이를 통해 취업준비생들이 부족한 역량을 인지하고 이에 맞춰 준비할 수 있도록 도움을 주는 것을 목표로 합니다.

## 프로젝트 구조

careerfit-ai/ ├── backend/ # FastAPI 백엔드 │ ├── main.py # FastAPI 진입점 │ ├── routers/ # API 엔드포인트 │ ├── services/ # RAG, Gemini 서비스 │ ├── data/ # CSV, SQLite, RAG 데이터 │ └── Dockerfile # Docker 설정 ├── frontend/ # React + Vite UI │ └── src/ ├── docs/ # 프로젝트 문서 및 하네스 └── README.md

## <h2>🛠 기술 스택</h2>


| 영역 | 기술 |
|------|------|
| 백엔드 | Python 3.12, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite |
| 실행 환경 | Docker |

## 

## 진행 현황

- [x] 1일차: 프로젝트 기획 및 개발 환경 세팅

- [x] 2일차: FastAPI 서버 구축 및 Gemini API 연결

* Python 가상환경을 세팅하고 FastAPI 기반 백엔드 서버 구조 구축
* `/health`, `/jobs`, `/analyze` API 등 핵심 앤드포인트 구현
* Gemini 2.5 Flash-Lite API를 연동해 LLM 서비스 기능 준비

- [x] 3일차: 데이터 파이프라인 구축

* 전처리 파이프라인(`preprocess.py`) 구축
* pandas를 통해 CSV 데이터의 결측치 확인, 결측치 처리, 중복 제거를 통한 무결성 확보
* 전처리된 데이터를 SQLite 데이터베이스에 저장하고 SQL 조회를 통해 저장 결과를 검증

- [x] 4일차: RAG 기반 서비스 + React UI

* 검색 결과 품질 확인
* React 프로젝트 생성 및 실행
* 결과, 출처 카드 화면 출력 확인 및 UI 변경

- [ ] 5일차: Docker + 포트폴리오 완성
