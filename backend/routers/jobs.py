# backend/routers/jobs.py

from fastapi import APIRouter

from typing import List

router = APIRouter()


# 목업 데이터: 3일차에 실제 CSV 데이터로 교체한다

MOCK_JOBS = [
    {
        "id": 1,
        "company": "신한카드",
        "title": "Data Science 및 AI 모델링 전문가",
        "required_skills": ["Python", "SQL", "Machine Learning", "딥러닝 프레임워크"],
        "preferred_skills": ["금융 데이터 분석 경험", "Cloud(AWS/GCP) 환경 활용능력", "SAS"],
        "description": "카드 결제 데이터 및 고객 행동 데이터를 기반으로 맞춤형 마케팅 스코어링 모델을 개발합니다. 대형 언어 모델(LLM)을 활용한 사내 업무 자동화 및 AI 기반 상담 어시스턴트 엔진을 고도화합니다.",
        "deadline": "2026-08-31",
    },
    {
        "id": 2,
        "company": "국민은행",
        "title": "데이터 기획 및 비즈니스 분석가 (Data Analyst)",
        "required_skills": ["R/Python 데이터 핸들링", "SQL 역량", "태블로(Tableau) 등 BI 툴"],
        "preferred_skills": ["통계학/데이터사이언스 전공", "금융 상품 마케팅 지표 설계 경험"],
        "description": "여/수신 상품 및 디지털 뱅킹 이용 고객의 여정을 분석하여 이탈 방지 및 CRM 마케팅 시나리오를 도출합니다. 데이터 마트 인프라를 구축하고 전사 핵심 성과 지표(KPI) 시각화 대시보드를 생성합니다.",
        "deadline": "2026-08-31",
    },
    {
        "id": 3,
        "company": "현대카드",
        "title": "Data Analyst (리스크 관리 및 FDS 담당)",
        "required_skills": ["데이터 전처리 역량", "SQL/Python", "통계적 가설 검정"],
        "preferred_skills": ["이상 거래 탐지(FDS) 시스템 구축 경험", "빅데이터 파이프라인(Hadoop/Spark) 이해"],
        "description": "신용카드 부정 사용 및 이상 거래 패턴을 탐지하는 FDS 스코어링 모델을 상시 모니터링하고 개선합니다. 리스크 비용 최소화를 위한 심사 기준 및 한도 산정 알고리즘 데이터 분석을 전담합니다.",
        "deadline": "2026-08-31",
    },
]

@router.get("/jobs", tags=["Jobs"])
def get_jobs():
    """

    취업 공고 목록을 반환하는 엔드포인트.

    현재는 목업 데이터를 반환하며, 3일차에 실제 데이터로 교체한다.

    """

    return {"count": len(MOCK_JOBS), "jobs": MOCK_JOBS}


@router.get("/jobs/{job_id}", tags=["Jobs"])
def get_job_by_id(job_id: int):
    """

    특정 공고의 상세 정보를 반환한다.

    """

    for job in MOCK_JOBS:

        if job["id"] == job_id:

            return job

    # 찾지 못한 경우

    from fastapi import HTTPException

    raise HTTPException(status_code=404, detail=f"공고 ID {job_id}를 찾을 수 없습니다.")
