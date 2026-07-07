
# CareerFit AI

> 취업·공모전 데이터 기반 맞춤형 AI 포트폴리오 코치



## 프로젝트 개요

취업준비를 하는 학생들은 희망 직무에 지원하기 위해 실무 경험, 자격증 등 어떠한 역량이 필요한지 파악하는데 어려움을 겪고 있습니다.
CareerFit AI는 실제 채용공고를 바탕으로 사용자의 전공, 보유기술, 관심 직무를 분석하는 서비스입이를 통해 취업준비생들이 부족한 역량을 인지하고 이에 맞춰 준비할 수 있도록 도움을 주는 것을 목표로 합니다.
RAG 구조를 사용해 사용자의 정보를 바탕으로 ChromaDB에서 유사한 채용 공고를 먼저 검색한 후, 이 공고를 바탕으로 Gemini가 답변을 생성하기 때문에 단순 AI의 추측이 아닌 실제 채용 공고를 근거로 한 분석 결과를 제공합니다.

## 📁 프로젝트 구조

```text
careerfit-ai/
├── backend/
│   ├── main.py                 # FastAPI 애플리케이션 진입점
│   ├── routers/
│   │   ├── analyze.py          # 분석 API
│   │   └── health.py           # Health Check API
│   ├── services/
│   │   ├── llm_service.py      # Gemini 호출
│   │   ├── rag_service.py      # ChromaDB 검색
│   │   └── data_service.py     # 데이터 처리
│   ├── database/
│   │   ├── sqlite.db           # 채용공고 데이터
│   │   └── chroma_db/          # 벡터 데이터베이스
│   ├── data/
│   │   └── jobs.csv            # 원본 데이터
│   ├── .env
│   ├── requirements.txt
│   └── Dockerfile
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── docs
├── .gitignore
└── README.md
```
## 📊 데이터 처리 흐름

```text
채용공고 CSV
      │
      ▼
Pandas 전처리
      │
      ├──────────────┐
      ▼              ▼
SQLite 저장      ChromaDB 저장
      │              │
      └──────┬───────┘
             ▼
      사용자 질문
             │
             ▼
     ChromaDB 검색(RAG)
             │
             ▼
   Gemini에게 검색 결과 전달
             │
             ▼
 answer + sources 생성
             │
             ▼
        React 화면 출력
```

## <h2>🛠 기술 스택</h2>

| 영역 | 기술 |
|------|------|
| 백엔드 | Python 3.12, FastAPI |
| AI API | Gemini 2.5 Flash-Lite |
| 데이터 | Pandas, SQLite, ChromaDB |
| 프론트엔드 | React, Vite |
| 실행 환경 | Docker |

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

- [X] 5일차: Docker + 포트폴리오 완성

## ✅ 프로젝트 검증

다음 항목을 기준으로 프로젝트가 정상적으로 동작하는 것을 확인했습니다.

| 검증 항목 | 결과 |
|-----------|------|
| FastAPI 서버 실행 (`/health`) | ✅ 정상 |
| React UI 실행 | ✅ 정상 |
| `/analyze` API 호출 | ✅ 정상 |
| RAG 검색 결과(`sources`) 반환 | ✅ 정상 |
| Gemini API 응답 생성 | ✅ 정상 |
| SQLite 데이터 조회 | ✅ 정상 |
| ChromaDB 유사도 검색 | ✅ 정상 |
| Docker 이미지 생성 | ✅ 정상 |
| Docker 컨테이너 실행 | ✅ 정상 |
| GitHub 저장소 업로드 | ✅ 완료 |

### API 테스트

#### Health Check

```http
GET /health
```

응답 예시

```json
{
  "status": "ok"
}
```

#### Analyze

```http
POST /analyze
```

입력 예시

```json
{
  "major": "컴퓨터과학부",
  "skills": ["Python", "SQL"],
  "job": "백엔드 개발자"
}
```

응답 항목

- answer
- sources
- confidence

### Docker 실행 확인

```bash
docker build -t careerfit-ai .
docker run -p 8000:8000 --env-file .env careerfit-ai
```

실행 후

```
INFO: Application startup complete.
INFO: Uvicorn running on http://0.0.0.0:8000
```

로그가 출력되는 것을 확인했습니다.

## 개발 과정 중 어려웠던 점
코드 구현 자체보다 RAG의 동작 원리를 이해하는 것이 처음에 어려웠습니다. 사용자의 정보를 받으면 chromaDB에서 유사한 채용 공고를 먼저 검색하고, 이를 기반으로 Gemini가 함께 답변을 생성한다는 것을 깨달았습니다. 또한 파이썬과 Docker 실행 과정에서 발생한 여러 충돌 문제와 오류를 AI조교와 해결하면서 AI 사용 경험을 쌓을 수 있었습니다.

## 🔮 향후 개선

### 1. 이력서 PDF 자동 분석 기능
사용자가 PDF 형식의 이력서를 업로드하면 텍스트를 추출한 뒤, Gemini를 이용하여 보유 기술과 프로젝트 경험을 자동으로 분석할 계획입니다. 추출된 기술 스택을 기존 RAG 검색 결과와 비교하여 부족한 역량과 추천 프로젝트를 더욱 정확하게 제안하도록 개선할 예정입니다.

### 2. 실시간 채용 공고 API 연동
현재는 학습용 채용 공고 데이터를 사용하고 있지만, 향후 사람인·잡코리아·공공데이터 API 등을 연동하여 최신 채용 공고를 자동으로 수집하도록 개선할 예정입니다. 수집된 데이터는 전처리 후 SQLite와 ChromaDB에 저장하여 최신 정보를 기반으로 RAG 검색이 가능하도록 구현할 계획입니다.

### 3. 개인 맞춤형 학습 로드맵 제공
사용자의 분석 결과와 부족한 기술을 기반으로 학습 우선순위를 자동 생성하는 기능을 추가할 예정입니다. 예를 들어 Python이 부족한 경우에는 Python → SQL → Pandas → 프로젝트 순으로 단계별 학습 로드맵을 생성하고, 추천 강의와 실습 프로젝트를 함께 제공하도록 구현할 계획입니다.

## Developer
- Name : 장현준
- Role : Backend / AI Service
- Email : jhjun2629g@gmail.com