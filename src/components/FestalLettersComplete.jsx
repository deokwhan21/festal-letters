import React, { useState } from 'react';

const FestalLettersComplete = () => {
  const [selectedPeriod, setSelectedPeriod] = useState(1);
  const [selectedLetter, setSelectedLetter] = useState(1);
  const [viewMode, setViewMode] = useState('detail');

  // Brakke & Gwynn (2022)의 연대 재배열 정리:
  // 330년 → Letter 24 (NPNF XXIV, 원래 352년에 배치)
  // 331년 → Letter 14 (NPNF XI, 원래 342년에 배치)  
  // 342년 → Letter 3 (NPNF III, 원래 331년에 배치)
  // 352년 → Letter 2 (NPNF II, 원래 330년에 배치)

  // 모든 편지 데이터 (45편지 전체) - B&G 연대순으로 정렬
  const allLetters = {
    // 제1기: "초기" (The Early Years) 328-335년
    1: [
      {
        number: 1, year: 329, 
        npnfNumber: 'I',
        bgNumber: 1,
        easterDate: '4월 15일 (xx Pharmuthi)',
        historicalContext: '아타나시오스의 첫 부활절편지. 328년 6월 8일 대주교 취임 후 첫 부활절.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존 (Cureton 1848)',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재 (Lefort 1955)',
        greekStatus: 'none', greekDetail: '그리스어 원문 소실',
        brakkeGwynn: 'pp. 47-56', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합',
        changeDetail: 'NPNF의 시리아어 기반에 Lefort의 콥트어 단편 추가.',
        npnfPage: 'NPNF2-04, Letter I',
        themes: ['절기의 때(καιρός)', '금식의 의미', '영적 준비'],
        indexNote: '아타나시오스가 처음으로 부활절편지를 발송했다.',
        critical: true, criticalNote: '아타나시오스의 최초 부활절편지.',
        firstLetter: true,
        reordered: false,
        theologicalNote: '"절기를 지키는 것은 시간의 문제가 아니라 영혼의 준비의 문제이다."'
      },
      {
        number: 24, year: 330,
        npnfNumber: 'XXIV',
        bgNumber: 2,
        npnfYear: 352,
        easterDate: '4월 7일 (xii Pharmuthi)',
        historicalContext: '초기 목회 사역. ★ NPNF에서는 352년 Letter XXIV로 배치되어 있었음.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '콥트어 미발견',
        greekStatus: 'none', greekDetail: '그리스어 원문 소실',
        brakkeGwynn: 'pp. 57-62', changes: 'major',
        changeType: '★ 연대 재배열: 352년 → 330년 (22년 앞당김)',
        changeDetail: 'NPNF의 Letter XXIV(352년 배치)를 330년으로 재배열. Camplani(2003)의 분석에 기초.',
        npnfPage: 'NPNF2-04, Letter XXIV (352년으로 잘못 배치)',
        themes: ['유월절의 영적 의미', '그리스도 안에서의 자유'],
        indexNote: '평화로운 해.',
        critical: true, criticalNote: '★ 주요 재배열 #1: NPNF XXIV(352년) → B&G 330년',
        reordered: true,
        reorderInfo: { from: 352, to: 330, npnfLetter: 'XXIV', direction: 'earlier', years: 22 },
        theologicalNote: '"유대인의 유월절은 그림자였고, 우리의 부활절은 참된 것이다."'
      },
      {
        number: 14, year: 331,
        npnfNumber: 'XI',
        bgNumber: 3,
        npnfYear: 342,
        easterDate: '3월 23일 (xxvii Phamenoth)',
        historicalContext: '초기 목회 사역. ★ NPNF에서는 342년 Letter XI로 배치되어 있었음.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '그리스어 원문 소실',
        brakkeGwynn: 'pp. 63-68', changes: 'major',
        changeType: '★ 연대 재배열: 342년 → 331년 (11년 앞당김)',
        changeDetail: 'NPNF의 Letter XI(342년 배치)를 331년으로 재배열.',
        npnfPage: 'NPNF2-04, Letter XI (342년으로 잘못 배치)',
        themes: ['금식의 영적 의미', '절제와 거룩함'],
        indexNote: '평화로운 해.',
        critical: true, criticalNote: '★ 주요 재배열 #2: NPNF XI(342년) → B&G 331년',
        reordered: true,
        reorderInfo: { from: 342, to: 331, npnfLetter: 'XI', direction: 'earlier', years: 11 },
        peace: true
      },
      {
        number: 4, year: 332, 
        npnfNumber: 'IV (NPNF III)',
        bgNumber: 4,
        easterDate: '4월 11일', historicalContext: '초기 목회 사역.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 69-74', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합',
        changeDetail: '콥트어 단편 통합. 번호 체계 조정.',
        npnfPage: 'NPNF2-04, Letter III', themes: ['교회의 일치'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 5, year: 333, 
        npnfNumber: 'V (NPNF IV)',
        bgNumber: 5,
        easterDate: '4월 3일', historicalContext: '초기 목회 사역.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 75-79', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선',
        changeDetail: '시리아어 기반 번역 개선.',
        npnfPage: 'NPNF2-04, Letter IV', themes: ['성경 해석'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 6, year: 334, 
        npnfNumber: 'VI (NPNF V)',
        bgNumber: 6,
        easterDate: '4월 23일', historicalContext: '튀로스 공의회(335년) 직전 해.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 80-85', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합',
        changeDetail: '콥트어 단편 통합.',
        npnfPage: 'NPNF2-04, Letter V', themes: ['부활의 희망'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 7, year: 335, 
        npnfNumber: 'VII (NPNF VI)',
        bgNumber: 7,
        easterDate: '4월 7일',
        historicalContext: '튀로스 공의회 개최. 아타나시오스 정죄. 첫 번째 유배 직전.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문',
        brakkeGwynn: 'pp. 86-91', changes: 'moderate',
        changeType: '시리아어 + 콥트어 + 그리스어 통합',
        changeDetail: '세 언어 사료 통합. 첫 유배 직전의 중요한 편지.',
        npnfPage: 'NPNF2-04, Letter VI', themes: ['신앙의 견고함'],
        indexNote: '튀로스 공의회. 아타나시오스 정죄.',
        critical: true, criticalNote: '"초기"의 마지막 편지. 첫 번째 유배 직전.',
        lastOfPeriod: true, reordered: false,
        transitionNote: '이 편지 이후 첫 번째 유배(트리어) 시작.'
      }
    ],
    // 제2기: "동서 사이에서" (Between East and West) 335-346년
    2: [
      {
        number: 8, year: 336, 
        npnfNumber: 'VIII (색인만)',
        bgNumber: 8,
        easterDate: '3월 30일',
        historicalContext: '첫 번째 유배 (트리어). 336년 2월 5일 유배 출발.',
        syriacStatus: 'none', syriacDetail: '편지 미발송 (색인 기록)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 92 (색인만)', changes: 'clarification',
        changeType: '색인 해석', changeDetail: '첫 번째 유배로 편지 발송 불가.',
        npnfPage: 'NPNF2-04, Index VIII', themes: [],
        indexNote: '트리어에 있어 부활절편지를 쓸 수 없었다.',
        noLetter: true, exile: true, exileNumber: 1, exilePeriod: '1차 유배 (트리어)',
        reordered: false
      },
      {
        number: 9, year: 337, 
        npnfNumber: 'IX (색인만)',
        bgNumber: 9,
        easterDate: '4월 19일',
        historicalContext: '첫 번째 유배 계속. 콘스탄티누스 대제 사망 (337년 5월 22일).',
        syriacStatus: 'none', syriacDetail: '편지 미발송',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 93 (색인만)', changes: 'clarification',
        changeType: '색인 해석', changeDetail: '콘스탄티누스 사망 기록.',
        npnfPage: 'NPNF2-04, Index IX', themes: [],
        indexNote: '트리어에 있어 편지 발송 불가.',
        noLetter: true, exile: true, exileNumber: 1, exilePeriod: '1차 유배',
        critical: true, criticalNote: '콘스탄티누스 대제 사망. 귀환 가능.',
        reordered: false
      },
      {
        number: 10, year: 338, 
        npnfNumber: 'X (NPNF VII)',
        bgNumber: 10,
        easterDate: '3월 25일',
        historicalContext: '첫 번째 유배 종료. 337년 11월 23일 귀환. 안토니우스 방문.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 107-112', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 유배 신학',
        changeDetail: '유배 중 쓴 다섯 편지 중 첫 번째. 귀환의 기쁨.',
        npnfPage: 'NPNF2-04, Letter VII', themes: ['귀환의 기쁨', '하나님의 섭리'],
        indexNote: '아타나시오스가 갈리아에서 돌아왔다. 안토니우스가 알렉산드리아를 방문했다.',
        critical: true, criticalNote: '유배 중 쓴 다섯 편지 중 첫 번째.',
        return: true, exileLetter: true, reordered: false
      },
      {
        number: 11, year: 339, 
        npnfNumber: 'XI (NPNF VIII)',
        bgNumber: 11,
        easterDate: '4월 13일',
        historicalContext: '두 번째 유배 시작 직전. 339년 3월 테오나스 교회에서 도피.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 113-118', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선',
        changeDetail: '두 번째 유배 직전의 마지막 편지.',
        npnfPage: 'NPNF2-04, Letter VIII', themes: ['박해 직면'],
        indexNote: '테오나스 교회에서 도피. 그레고리우스 입성.',
        critical: true, criticalNote: '두 번째 유배 직전 마지막 편지.',
        exileStart: true, reordered: false
      },
      {
        number: 12, year: 340, 
        npnfNumber: 'XII (통지만)',
        bgNumber: 12,
        easterDate: '4월 5일', historicalContext: '두 번째 유배 (로마). 짧은 통지만 발송.',
        syriacStatus: 'notice_only', syriacDetail: '짧은 통지만 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 119 (통지만)', changes: 'clarification',
        changeType: '색인 해석 + 통지 확인', changeDetail: '정식 편지 대신 짧은 통지만.',
        npnfPage: 'NPNF2-04, Index XII', themes: [],
        indexNote: '아리우스파가 부활절 날짜를 잘못 계산.',
        noticeOnly: true, exile: true, exileNumber: 2, exilePeriod: '2차 유배 (로마)',
        reordered: false
      },
      {
        number: 13, year: 341, 
        npnfNumber: 'XIII (NPNF IX/X)',
        bgNumber: 13,
        easterDate: '3월 21일',
        historicalContext: '두 번째 유배 (로마). 유배 중 쓴 가장 중요한 신학적 편지.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 120-130', changes: 'moderate',
        changeType: '시리아어 + 유배 신학 분석',
        changeDetail: '유배 중 쓴 다섯 편지 중 가장 중요. 고난의 신학적 의미.',
        npnfPage: 'NPNF2-04, Letter IX/X', themes: ['유배의 신학', '고난의 의미', '욥의 인내'],
        indexNote: '색인은 "편지 미발송"이라 하나 실제 편지는 존재.',
        critical: true, criticalNote: '유배 중 쓴 다섯 편지 중 가장 중요한 신학적 편지.',
        exile: true, exileNumber: 2, exileLetter: true, reordered: false,
        theologicalNote: '"모든 인간은 하나님으로부터 두 가지 이유로 고난을 통해 시험받습니다."'
      },
      {
        number: 3, year: 342,
        npnfNumber: 'III',
        bgNumber: 14,
        npnfYear: 331,
        easterDate: '4월 10일 (xv Pharmuthi)',
        historicalContext: '두 번째 유배 (로마) 계속. ★ NPNF에서는 331년 Letter III로 배치되어 있었음.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '그리스어 원문 소실',
        brakkeGwynn: 'pp. 131-137', changes: 'major',
        changeType: '★ 연대 재배열: 331년 → 342년 (11년 뒤로)',
        changeDetail: 'NPNF의 Letter III(331년 배치)를 342년으로 재배열.',
        npnfPage: 'NPNF2-04, Letter III (331년으로 잘못 배치)',
        themes: ['신앙의 견고함', '그리스도인의 소망'],
        indexNote: '색인은 "편지 미발송"이라 하나 실제 편지는 존재.',
        critical: true, criticalNote: '★ 주요 재배열 #3: NPNF III(331년) → B&G 342년',
        exile: true, exileNumber: 2, 
        reordered: true,
        reorderInfo: { from: 331, to: 342, npnfLetter: 'III', direction: 'later', years: 11 },
        discrepancy: true
      },
      {
        number: 15, year: 343, 
        npnfNumber: 'XV (단편)',
        bgNumber: 15,
        easterDate: '3월 26일',
        historicalContext: '사르디카 공의회. 50년간 부활절 날짜 합의.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편만 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 138-141', changes: 'moderate',
        changeType: '단편 편집 + 역사적 맥락',
        changeDetail: '사르디카 공의회의 중요성. 50년 합의.',
        npnfPage: 'NPNF2-04, Letter XV', themes: ['교회 일치', '부활절 합의'],
        indexNote: '사르디카 공의회. 50년간 부활절 날짜 합의.',
        critical: true, criticalNote: '사르디카 공의회. 동서 협력.',
        exile: true, exileNumber: 2, council: true, reordered: false
      },
      {
        number: 16, year: 344, 
        npnfNumber: 'XVI (단편)',
        bgNumber: 16,
        easterDate: '4월 14일', historicalContext: '두 번째 유배 계속. 니시에서.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편만 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 142-144', changes: 'minimal',
        changeType: '단편 편집', changeDetail: '단편적 보존.',
        npnfPage: 'NPNF2-04, Letter XVI', themes: [],
        indexNote: '니시에서 부활절.',
        exile: true, exileNumber: 2, reordered: false
      },
      {
        number: 17, year: 345, 
        npnfNumber: 'XVII (NPNF XII)',
        bgNumber: 17,
        easterDate: '4월 6일',
        historicalContext: '그레고리우스 사망 (345년 6월 26일). 귀환 길 열림.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 145-150', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선', changeDetail: '그레고리우스 사망으로 귀환 가능.',
        npnfPage: 'NPNF2-04, Letter XII', themes: ['귀환의 희망'],
        indexNote: '그레고리우스가 6월 26일 사망. 귀환 길 열림.',
        critical: true, criticalNote: '그레고리우스 사망. 7년 유배의 끝.',
        exile: true, exileNumber: 2, reordered: false
      },
      {
        number: 18, year: 346, 
        npnfNumber: 'XVIII (NPNF XIII)',
        bgNumber: 18,
        easterDate: '3월 22일',
        historicalContext: '두 번째 유배 종료. 346년 10월 21일 귀환. "황금 10년" 시작.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 151-157', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 귀환 신학',
        changeDetail: '7년 유배 후 귀환. "황금 10년" 시작.',
        npnfPage: 'NPNF2-04, Letter XIII', themes: ['귀환의 기쁨', '하나님의 승리'],
        indexNote: '파오피 24일(10월 21일) 알렉산드리아 입성.',
        critical: true, criticalNote: '"동서 사이에서" 마지막 편지. "황금 10년" 시작.',
        return: true, lastOfPeriod: true, reordered: false,
        transitionNote: '"황금 10년(Golden Decade)"이 시작됩니다 (346-356).'
      }
    ],
    // 제3기: "황금 10년" (The Golden Decade) 346-356년
    3: [
      {
        number: 19, year: 347, 
        npnfNumber: 'XIX (NPNF XIV)',
        bgNumber: 19,
        easterDate: '4월 11일',
        historicalContext: '"황금 10년" 첫해. 346년 10월 귀환 후 첫 번째 온전한 부활절.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 158-163', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합',
        changeDetail: '"황금 10년" 첫 편지.',
        npnfPage: 'NPNF2-04, Letter XIV', themes: ['귀환의 감사', '평화의 시작'],
        indexNote: '"황금 10년" 첫해.',
        peace: true, goldenDecade: true, firstOfPeriod: true, reordered: false
      },
      {
        number: 20, year: 348, 
        npnfNumber: 'XX (NPNF XV)',
        bgNumber: 20,
        easterDate: '4월 2일', historicalContext: '"황금 10년" 계속.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 164-170', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합', changeDetail: '콥트어 단편 추가.',
        npnfPage: 'NPNF2-04, Letter XV', themes: ['그리스도인의 삶'],
        indexNote: '평화로운 해.', peace: true, goldenDecade: true, reordered: false
      },
      {
        number: 21, year: 349, 
        npnfNumber: 'XXI (NPNF XVI)',
        bgNumber: 21,
        easterDate: '4월 22일', historicalContext: '"황금 10년" 계속.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 171-176', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합', changeDetail: '콥트어 단편 추가.',
        npnfPage: 'NPNF2-04, Letter XVI', themes: ['절기의 기쁨'],
        indexNote: '평화로운 해.', peace: true, goldenDecade: true, reordered: false
      },
      {
        number: 22, year: 350, 
        npnfNumber: 'XXII (NPNF XVII)',
        bgNumber: 22,
        easterDate: '4월 7일',
        historicalContext: '콘스탄스 황제 피살 (마그넨티우스). 콘스탄티우스 단독 황제.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 177-182', changes: 'minimal',
        changeType: '시리아어 유지 + 역사적 맥락',
        changeDetail: '콘스탄스 피살의 정치적 전환.',
        npnfPage: 'NPNF2-04, Letter XVII', themes: ['정치적 변화 속 신앙'],
        indexNote: '콘스탄스가 살해됨. 콘스탄티우스가 홀로 제국 통치.',
        critical: true, criticalNote: '서방 보호자 콘스탄스 사망. 정치적 전환.',
        peace: true, goldenDecade: true, politicalTurn: true, reordered: false
      },
      {
        number: 23, year: 351, 
        npnfNumber: 'XXIII (NPNF XVIII)',
        bgNumber: 23,
        easterDate: '3월 29일', historicalContext: '"황금 10년" 계속.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 183-187', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선', changeDetail: '시리아어 기반 번역 개선.',
        npnfPage: 'NPNF2-04, Letter XVIII', themes: ['절기 준수'],
        indexNote: '평화로운 해.', peace: true, goldenDecade: true, reordered: false
      },
      {
        number: 2, year: 352,
        npnfNumber: 'II',
        bgNumber: 24,
        npnfYear: 330,
        easterDate: '4월 17일 (xxii Pharmuthi)',
        historicalContext: '"황금 10년" 계속. ★ NPNF에서는 330년 Letter II로 배치되어 있었음.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문',
        brakkeGwynn: 'pp. 188-193', changes: 'major',
        changeType: '★ 연대 재배열: 330년 → 352년 (22년 뒤로)',
        changeDetail: 'NPNF의 Letter II(330년 배치)를 352년으로 재배열. 콥트어 단편과 코스마스 인용 통합.',
        npnfPage: 'NPNF2-04, Letter II (330년으로 잘못 배치)',
        themes: ['절기의 의미', '그리스도인의 소망'],
        indexNote: '평화로운 해.',
        critical: true, criticalNote: '★ 주요 재배열 #4: NPNF II(330년) → B&G 352년',
        peace: true, goldenDecade: true,
        reordered: true,
        reorderInfo: { from: 330, to: 352, npnfLetter: 'II', direction: 'later', years: 22 }
      },
      {
        number: 25, year: 353, 
        npnfNumber: 'XXV (NPNF XIX)',
        bgNumber: 25,
        easterDate: '4월 9일',
        historicalContext: '아를 공의회 - 아리우스파 압력 강화 시작.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 194-199', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 역사적 맥락',
        changeDetail: '아를 공의회 정황. 압력 강화 시작.',
        npnfPage: 'NPNF2-04, Letter XIX', themes: ['교회 일치', '박해의 조짐'],
        indexNote: '아를 공의회. 세라피온을 콘스탄티우스에게 보냈으나 실패.',
        critical: true, criticalNote: '아를 공의회. 압력 강화 시작.',
        peace: true, goldenDecade: true, pressureBegins: true, reordered: false
      },
      {
        number: 26, year: 354, 
        npnfNumber: 'XXVI (NPNF XX)',
        bgNumber: 26,
        easterDate: '3월 25일', historicalContext: '"황금 10년" 후반. 긴장 고조.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 200-204', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선', changeDetail: '시리아어 기반.',
        npnfPage: 'NPNF2-04, Letter XX', themes: ['절기의 의미'],
        indexNote: '평화로운 해. 그러나 긴장 고조.',
        peace: true, goldenDecade: true, reordered: false
      },
      {
        number: 27, year: 355, 
        npnfNumber: 'XXVII (NPNF XXI)',
        bgNumber: 27,
        easterDate: '4월 14일',
        historicalContext: '"황금 10년" 종료. 밀라노 공의회 - 아타나시오스 정죄.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문',
        brakkeGwynn: 'pp. 205-211', changes: 'moderate',
        changeType: '시리아어 + 콥트어 + 그리스어 통합',
        changeDetail: '"황금 10년" 마지막 편지. 세 언어 통합.',
        npnfPage: 'NPNF2-04, Letter XXI', themes: ['박해 직면'],
        indexNote: '밀라노 공의회에서 아타나시오스 정죄.',
        critical: true, criticalNote: '"황금 10년" 마지막 편지. 밀라노 정죄.',
        peace: true, goldenDecade: true, lastOfGoldenDecade: true, reordered: false
      },
      {
        number: 28, year: 356, 
        npnfNumber: 'XXVIII (NPNF XXII)',
        bgNumber: 28,
        easterDate: '3월 30일',
        historicalContext: '세 번째 유배 시작. 356년 2월 8일 밤 테오나스 교회 습격, 탈출.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 212-218', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 유배 시작 맥락',
        changeDetail: '세 번째 유배 직전 마지막 편지. 테오나스 습격.',
        npnfPage: 'NPNF2-04, Letter XXII', themes: ['박해', '기적적 탈출'],
        indexNote: '메키르 13일(2월 8일) 밤, 5000명 병사로 테오나스 교회 포위. 기적적 탈출.',
        critical: true, criticalNote: '세 번째 유배 시작. 5000명 병사. 기적적 탈출.',
        exile: true, exileStart: true, exilePeriod: '3차 유배 시작 (사막)',
        lastOfPeriod: true, reordered: false,
        transitionNote: '"사막 유배에서 교부로" 시기가 시작됩니다.'
      }
    ],
    // 제4기: "사막 유배에서 교부로" (From Desert Exile to Church Father) 356-373년
    4: [
      {
        number: 29, year: 357, 
        npnfNumber: 'XXIX (단편)',
        bgNumber: 29,
        easterDate: '4월 19일',
        historicalContext: '세 번째 유배 (사막). 게오르기우스의 폭력적 입성.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편만 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 219-223', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 유배 신학',
        changeDetail: '유배 중 쓴 다섯 편지 중 하나. 유배 신학의 정수.',
        npnfPage: 'NPNF2-04, Letter XXIX (단편)', themes: ['유배 신학', '장소 vs 신앙'],
        indexNote: '게오르기우스가 극심한 폭력과 함께 알렉산드리아 입성.',
        critical: true, criticalNote: '유배 신학의 정수: "그들은 장소를 차지하고, 여러분은 사도적 신앙을 지킵니다."',
        exile: true, exileNumber: 3, exileLetter: true, reordered: false,
        theologicalNote: '"그들은 장소를 차지하고, 여러분은 사도적 신앙을 지킵니다."'
      },
      {
        number: 30, year: 358, 
        npnfNumber: 'XXX (색인만)',
        bgNumber: 30,
        easterDate: '4월 4일', historicalContext: '세 번째 유배. 알렉산드리아에 은신.',
        syriacStatus: 'none', syriacDetail: '편지 발송 불가 (색인 기록)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 224 (색인만)', changes: 'clarification',
        changeType: '색인 해석', changeDetail: '게오르기우스가 쫓겨났으나 편지 발송 불가.',
        npnfPage: 'NPNF2-04, Index XXX', themes: [],
        indexNote: '게오르기우스가 군중에 의해 쫓겨남. 이 해에도 교황은 편지를 보낼 수 없었다.',
        noLetter: true, exile: true, exileNumber: 3, exilePeriod: '3차 유배', reordered: false
      },
      {
        number: 31, year: 359, 
        npnfNumber: 'XXXI (색인만)',
        bgNumber: 31,
        easterDate: '4월 4일', historicalContext: '세 번째 유배 계속.',
        syriacStatus: 'none', syriacDetail: '편지 미발송 (색인 기록)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 234 (색인만)', changes: 'clarification',
        changeType: '색인 해석', changeDetail: '이 해에도 교황은 편지를 쓰지 않았다.',
        npnfPage: 'NPNF2-04, Index XXXI', themes: [],
        indexNote: '이 해에도 교황은 편지를 쓰지 않았다.',
        noLetter: true, exile: true, exileNumber: 3, exilePeriod: '3차 유배', reordered: false
      },
      {
        number: 32, year: 360, 
        npnfNumber: 'XXXII (색인만)',
        bgNumber: 32,
        easterDate: '4월 23일',
        historicalContext: '세 번째 유배. 에우다이모니스 고문 사건.',
        syriacStatus: 'none', syriacDetail: '편지 미발송 (색인 기록)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 234-235 (색인만)', changes: 'clarification',
        changeType: '색인 해석 + 역사적 맥락',
        changeDetail: '은둔처 수색 중 동정녀 에우다이모니스 고문.',
        npnfPage: 'NPNF2-04, Index XXXII', themes: ['박해', '신실한 증인'],
        indexNote: '총독과 장군이 아타나시오스를 찾으면서 동정녀 에우다이모니스를 혹독하게 고문했다.',
        noLetter: true, exile: true, exileNumber: 3, reordered: false,
        critical: true, criticalNote: '박해의 강도 - 아타나시오스를 찾기 위해 동정녀까지 고문.'
      },
      {
        number: 33, year: 361, 
        npnfNumber: 'XXXIII (색인만)',
        bgNumber: 33,
        easterDate: '4월 8일',
        historicalContext: '콘스탄티우스 사망 (361년 11월). 율리아누스 즉위. 박해 중지.',
        syriacStatus: 'none', syriacDetail: '편지 발송 불가 (색인 기록)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 235 (색인만)', changes: 'clarification',
        changeType: '색인 해석 + 정치적 전환',
        changeDetail: '콘스탄티우스 사망, 율리아누스 즉위. 박해 중지.',
        npnfPage: 'NPNF2-04, Index XXXIII', themes: ['정치적 전환', '박해 종료'],
        indexNote: '콘스탄티우스가 죽고 율리아누스가 홀로 제국을 다스리면서 정통파에 대한 박해가 중지되었다.',
        noLetter: true, exile: true, exileNumber: 3, reordered: false,
        critical: true, criticalNote: '콘스탄티우스 사망 + 율리아누스 즉위. 박해 중지.'
      },
      {
        number: 34, year: 362, 
        npnfNumber: 'XXXIV (NPNF XXIII)',
        bgNumber: 34,
        easterDate: '3월 30일',
        historicalContext: '세 번째 유배 종료. 362년 2월 21일 귀환. 알렉산드리아 공의회.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 236-241', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 귀환 신학',
        changeDetail: '6년 유배 후 귀환. 알렉산드리아 공의회(362) 주재.',
        npnfPage: 'NPNF2-04, Letter XXIII', themes: ['귀환의 기쁨', '교회 일치'],
        indexNote: '칙령 공포 12일 후 아타나시오스가 알렉산드리아에 입장.',
        critical: true, criticalNote: '세 번째 유배 종료 (6년). 알렉산드리아 공의회 주재.',
        return: true, reordered: false
      },
      {
        number: 35, year: 363, 
        npnfNumber: 'XXXV (NPNF XXIV)',
        bgNumber: 35,
        easterDate: '4월 20일',
        historicalContext: '네 번째 유배 (율리아누스). 8개월간 테바이드로 피신. 율리아누스 사망.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존 (유배 중 발송)',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 242-247', changes: 'moderate',
        changeType: '시리아어 + 역사적 맥락 주석',
        changeDetail: '멤피스에서 테바이드로 피신하면서 편지 발송.',
        npnfPage: 'NPNF2-04, Letter XXIV', themes: ['네 번째 유배', '이교도 황제'],
        indexNote: '율리아누스의 칙령. 테바이드로. 8개월 후 율리아누스가 죽고 요비아누스가 황제.',
        critical: true, criticalNote: '네 번째 유배 (362년 10월 - 363년). 율리아누스의 이교 정책.',
        exile: true, exileNumber: 4, exilePeriod: '4차 유배 (테바이드)', reordered: false
      },
      {
        number: 36, year: 364, 
        npnfNumber: 'XXXVI (NPNF XXV)',
        bgNumber: 36,
        easterDate: '4월 4일',
        historicalContext: '평화로운 목회. 요비아누스 사망 (364년 2월). 발렌티니아누스/발렌스 즉위.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 248-252', changes: 'minimal',
        changeType: '시리아어 유지 + 번역 개선', changeDetail: '평화로운 시기.',
        npnfPage: 'NPNF2-04, Letter XXV', themes: ['평화', '목회'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 37, year: 365, 
        npnfNumber: 'XXXVII (NPNF XXVI)',
        bgNumber: 37,
        easterDate: '4월 24일',
        historicalContext: '다섯 번째 유배 시작 (365년 10월). 발렌스의 아리우스파 정책.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 253-257', changes: 'moderate',
        changeType: '시리아어 + 다섯 번째 유배 맥락',
        changeDetail: '발렌스의 아리우스파 정책으로 다섯 번째 유배 시작.',
        npnfPage: 'NPNF2-04, Letter XXVI', themes: ['다섯 번째 유배'],
        indexNote: '발렌스 황제의 칙령.',
        critical: true, criticalNote: '다섯 번째(마지막) 유배 시작 (365년 10월).',
        exile: true, exileNumber: 5, exilePeriod: '5차 유배 시작', reordered: false
      },
      {
        number: 38, year: 366, 
        npnfNumber: 'XXXVIII (NPNF XXVII)',
        bgNumber: 38,
        easterDate: '4월 16일',
        historicalContext: '다섯 번째 유배 종료 (366년 2월 1일). 최종 귀환.',
        syriacStatus: 'complete', syriacDetail: '시리아어 완전 보존 (유배 중 작성)',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 존재',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 258-263', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합 + 유배 신학',
        changeDetail: '마지막 유배 편지. 다섯 번 유배 중 쓴 마지막.',
        npnfPage: 'NPNF2-04, Letter XXVII', themes: ['최종 귀환', '고난의 완성'],
        indexNote: '플라비아누스 총독이 황제들에게 협의. 모두 잠잠해졌다.',
        critical: true, criticalNote: '마지막 유배 편지. 366년 2월 1일 최종 귀환.',
        exile: true, exileNumber: 5, exileLetter: true, exileLetterFinal: true, return: true,
        reordered: false
      },
      {
        number: 39, year: 367, 
        npnfNumber: 'XXXIX ★★★ 정경 편지',
        bgNumber: 39,
        easterDate: '4월 1일',
        historicalContext: '평화로운 말년. 성경 정경 목록 제시 - 신약 27권 최초 확정.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편 보존',
        copticStatus: 'extensive', copticDetail: '콥트어 광범위 보존 (Lefort 1955, Coquin 1984)',
        greekStatus: 'partial', greekDetail: '그리스어 정경 목록 부분 보존',
        brakkeGwynn: 'pp. 264-285 (별도 섹션)', changes: 'major',
        changeType: '그리스어 + 콥트어 + 시리아어 통합 복원',
        changeDetail: 'NPNF는 그리스어 단편만. B&G는 콥트어로 거의 전체 복원.',
        npnfPage: 'NPNF2-04, Letter XXXIX (그리스어 단편만)',
        themes: ['성경 정경', '이단 대응', '경전의 권위'],
        indexNote: '평화로운 해.',
        critical: true, criticalNote: '신약 27권 정경 최초 확정 목록. 기독교 역사상 가장 중요한 부활절편지.',
        peace: true, canonLetter: true, reordered: false,
        theologicalNote: '"이것들이 구원의 샘이니... 이것들에 아무것도 더하지 말라. 이것들에서 아무것도 빼지 말라."'
      },
      {
        number: 40, year: 368, 
        npnfNumber: 'XL (단편)',
        bgNumber: 40,
        easterDate: '4월 20일', historicalContext: '평화로운 말년.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문',
        brakkeGwynn: 'pp. 286-289', changes: 'moderate',
        changeType: '시리아어 단편 + 그리스어 인용 통합',
        changeDetail: '단편적 보존. 그리스어 인용문 통합.',
        npnfPage: 'NPNF2-04, Letter XL (단편)', themes: ['말년의 평화'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 41, year: 369, 
        npnfNumber: 'XLI (단편)',
        bgNumber: 41,
        easterDate: '4월 12일', historicalContext: '평화로운 말년.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편 보존',
        copticStatus: 'fragments', copticDetail: '콥트어 단편 - 멜리티우스파를 "기생충"으로',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'pp. 290-293', changes: 'moderate',
        changeType: '시리아어 + 콥트어 통합',
        changeDetail: '콥트어 단편에서 멜리티우스파 비판 추가.',
        npnfPage: 'NPNF2-04, Letter XLI (단편)', themes: ['멜리티우스파 비판'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 42, year: 370, 
        npnfNumber: 'XLII (색인만)',
        bgNumber: 42,
        easterDate: '3월 28일', historicalContext: '평화로운 말년.',
        syriacStatus: 'index_only', syriacDetail: '색인만 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 294 (색인만)', changes: 'minimal',
        changeType: '색인 해석', changeDetail: '색인만 보존.',
        npnfPage: 'NPNF2-04, Index XLII', themes: [],
        indexNote: '평화로운 해.', peace: true, indexOnly: true, reordered: false
      },
      {
        number: 43, year: 371, 
        npnfNumber: 'XLIII (색인만)',
        bgNumber: 43,
        easterDate: '4월 17일', historicalContext: '평화로운 말년.',
        syriacStatus: 'index_only', syriacDetail: '색인만 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'none', greekDetail: '소실',
        brakkeGwynn: 'p. 294 (색인만)', changes: 'minimal',
        changeType: '색인 해석', changeDetail: '색인만 보존.',
        npnfPage: 'NPNF2-04, Index XLIII', themes: [],
        indexNote: '평화로운 해.', peace: true, indexOnly: true, reordered: false
      },
      {
        number: 44, year: 372, 
        npnfNumber: 'XLIV (단편)',
        bgNumber: 44,
        easterDate: '4월 8일', historicalContext: '아타나시오스 말년.',
        syriacStatus: 'fragment', syriacDetail: '시리아어 단편 보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문',
        brakkeGwynn: 'pp. 295-298', changes: 'moderate',
        changeType: '시리아어 + 그리스어 인용 통합',
        changeDetail: '코스마스의 그리스어 인용문 통합.',
        npnfPage: 'NPNF2-04, Letter XLIV (단편)', themes: ['그리스도의 사역'],
        indexNote: '평화로운 해.', peace: true, reordered: false
      },
      {
        number: 45, year: 373, 
        npnfNumber: 'XLV (단편) - 마지막 편지',
        bgNumber: 45,
        easterDate: '3월 24일',
        historicalContext: '아타나시오스의 마지막 부활절편지. 373년 5월 2일 사망.',
        syriacStatus: 'none', syriacDetail: '시리아어 미보존',
        copticStatus: 'none', copticDetail: '미발견',
        greekStatus: 'cosmas', greekDetail: '코스마스 인용문만 보존',
        brakkeGwynn: 'pp. 299-300 (코스마스 인용만)', changes: 'moderate',
        changeType: '그리스어 인용 복원',
        changeDetail: '코스마스의 그리스어 인용만 보존.',
        npnfPage: 'NPNF2-04, Letter XLV (매우 제한적)',
        themes: ['마지막 권면', '신앙의 완성'],
        indexNote: '아타나시오스의 마지막 부활절편지. 373년 5월 2일 사망.',
        critical: true, criticalNote: '아타나시오스의 마지막 부활절편지 (373년). 45년간 대주교직 완료.',
        peace: true, finalLetter: true, reordered: false
      }
    ]
  };

  const periodInfo = {
    1: { 
      name: '"초기" (The Early Years)', 
      years: '328-335년', 
      color: 'blue',
      description: '대주교 취임부터 튀로스 공의회 정죄까지 - 평화로운 목회의 시작',
      letters: '편지 1, 24, 14, 4-7 (B&G 순서)',
      stats: { total: 7, syriac: 6, coptic: 5, greek: 1, reordering: 2 }
    },
    2: { 
      name: '"동서 사이에서" (Between East and West)', 
      years: '335-346년', 
      color: 'amber',
      description: '첫 번째 유배(트리어)와 두 번째 유배(로마) - 동방과 서방 사이',
      letters: '편지 8-13, 3, 15-18 (B&G 순서)',
      stats: { total: 11, syriac: 6, coptic: 3, greek: 0, exile: 9, return: 2, reordering: 1 }
    },
    3: { 
      name: '"황금 10년" (The Golden Decade)', 
      years: '346-356년', 
      color: 'green',
      description: '두 번째 유배 귀환부터 세 번째 유배 시작까지 - 가장 평화로운 시기',
      letters: '편지 19-23, 2, 25-28 (B&G 순서)',
      stats: { total: 10, syriac: 9, coptic: 6, greek: 2, reordering: 1, peace: 9 }
    },
    4: { 
      name: '"사막 유배에서 교부로" (From Desert Exile to Church Father)', 
      years: '356-373년', 
      color: 'purple',
      description: '세 번째~다섯 번째 유배, 말년의 평화와 정경 확정',
      letters: '편지 29-45',
      stats: { total: 17, syriac: 8, coptic: 4, greek: 5, exile: 9, canon: 1 }
    }
  };

  // 4개 편지 재배열 요약
  const reorderingSummary = [
    { npnf: 'II', npnfYear: 330, bg: 352, bgLetter: 2, direction: '뒤로', years: 22 },
    { npnf: 'III', npnfYear: 331, bg: 342, bgLetter: 3, direction: '뒤로', years: 11 },
    { npnf: 'XI', npnfYear: 342, bg: 331, bgLetter: 14, direction: '앞으로', years: 11 },
    { npnf: 'XXIV', npnfYear: 352, bg: 330, bgLetter: 24, direction: '앞으로', years: 22 }
  ];

  const getStatusColor = (status) => {
    const colors = {
      'complete': 'bg-green-500',
      'fragments': 'bg-yellow-500', 'fragment': 'bg-yellow-500', 'partial': 'bg-yellow-500',
      'extensive': 'bg-yellow-400',
      'cosmas': 'bg-blue-500',
      'misplaced': 'bg-purple-500',
      'notice_only': 'bg-purple-400', 'index_only': 'bg-purple-400',
      'none': 'bg-gray-300'
    };
    return colors[status] || 'bg-gray-300';
  };

  const getChangesBadge = (changes) => {
    const badges = {
      'major': { color: 'bg-red-100 text-red-800 border-red-300', text: '대폭 변경' },
      'moderate': { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', text: '부분 변경' },
      'minimal': { color: 'bg-green-100 text-green-800 border-green-300', text: '최소 변경' },
      'clarification': { color: 'bg-blue-100 text-blue-800 border-blue-300', text: '해석 보완' }
    };
    return badges[changes] || { color: 'bg-gray-100 text-gray-600', text: '정보없음' };
  };

  const currentLetters = allLetters[selectedPeriod] || [];
  const selectedLetterData = currentLetters.find(l => l.number === selectedLetter);
  const currentPeriod = periodInfo[selectedPeriod];

  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
    setSelectedLetter(allLetters[period][0].number);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        {/* 메인 헤더 */}
        <div className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">
            아타나시오스 부활절편지 통합 분석 (329-373년)
          </h1>
          <p className="text-indigo-100">
            Brakke & Gwynn (2022) 4단계 시대 구분 및 4개 편지 연대 재배열 반영
          </p>
          <div className="mt-4 grid grid-cols-6 gap-2 text-center text-sm">
            <div className="bg-white/20 rounded p-2">
              <div className="text-2xl font-bold">45</div>
              <div className="text-xs opacity-75">총 편지</div>
            </div>
            <div className="bg-white/20 rounded p-2">
              <div className="text-2xl font-bold">13</div>
              <div className="text-xs opacity-75">시리아어 완전</div>
            </div>
            <div className="bg-white/20 rounded p-2">
              <div className="text-2xl font-bold">~18</div>
              <div className="text-xs opacity-75">콥트어 추가</div>
            </div>
            <div className="bg-white/20 rounded p-2">
              <div className="text-2xl font-bold">5</div>
              <div className="text-xs opacity-75">유배 중 편지</div>
            </div>
            <div className="bg-white/20 rounded p-2 border-2 border-yellow-300">
              <div className="text-2xl font-bold text-yellow-200">4</div>
              <div className="text-xs opacity-75">연대 재배열</div>
            </div>
            <div className="bg-white/20 rounded p-2">
              <div className="text-2xl font-bold">1</div>
              <div className="text-xs opacity-75">정경 편지</div>
            </div>
          </div>
        </div>

        {/* 4개 편지 재배열 요약 */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 rounded-lg shadow-md p-4 mb-6">
          <h3 className="font-bold text-red-800 mb-3 flex items-center gap-2">
            <span className="text-xl">★</span> Brakke & Gwynn의 4개 편지 연대 재배열
          </h3>
          <div className="grid grid-cols-4 gap-3">
            {reorderingSummary.map((r, idx) => (
              <div key={idx} className={`p-3 rounded-lg border-2 ${r.direction === '앞으로' ? 'bg-blue-50 border-blue-300' : 'bg-orange-50 border-orange-300'}`}>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">NPNF Letter {r.npnf}</div>
                  <div className="font-bold text-lg">{r.npnfYear}년</div>
                  <div className="text-2xl my-1">{r.direction === '앞으로' ? '⬆️' : '⬇️'}</div>
                  <div className="font-bold text-lg text-green-700">{r.bg}년</div>
                  <div className="text-xs text-gray-500 mt-1">B&G 편지 {r.bgLetter}</div>
                  <div className={`text-xs mt-1 px-2 py-0.5 rounded ${r.direction === '앞으로' ? 'bg-blue-200 text-blue-800' : 'bg-orange-200 text-orange-800'}`}>
                    {r.years}년 {r.direction}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-3 text-center">
            * 편지 II↔XXIV (22년), 편지 III↔XI (11년)가 서로 위치를 교환
          </p>
        </div>

        {/* 시기 선택 탭 */}
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map(period => {
              const info = periodInfo[period];
              const isSelected = selectedPeriod === period;
              const colorClasses = {
                1: isSelected ? 'bg-blue-600 text-white' : 'bg-blue-50 text-blue-700 hover:bg-blue-100',
                2: isSelected ? 'bg-amber-600 text-white' : 'bg-amber-50 text-amber-700 hover:bg-amber-100',
                3: isSelected ? 'bg-green-600 text-white' : 'bg-green-50 text-green-700 hover:bg-green-100',
                4: isSelected ? 'bg-purple-600 text-white' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              };
              return (
                <button
                  key={period}
                  onClick={() => handlePeriodChange(period)}
                  className={`p-3 rounded-lg border-2 transition-all ${colorClasses[period]} ${isSelected ? 'border-transparent shadow-md' : 'border-transparent'}`}
                >
                  <div className="text-xs font-bold opacity-75">제{period}기</div>
                  <div className="font-semibold text-sm">{info.name.split('(')[0].trim()}</div>
                  <div className="text-xs opacity-75">{info.years}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 현재 시기 정보 */}
        <div className={`rounded-lg shadow-md p-4 mb-6 ${
          selectedPeriod === 1 ? 'bg-blue-50 border-l-4 border-blue-500' :
          selectedPeriod === 2 ? 'bg-amber-50 border-l-4 border-amber-500' :
          selectedPeriod === 3 ? 'bg-green-50 border-l-4 border-green-500' :
          'bg-purple-50 border-l-4 border-purple-500'
        }`}>
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold">{currentPeriod.name}</h2>
              <p className="text-sm text-gray-600 mt-1">{currentPeriod.description}</p>
              <p className="text-sm font-medium mt-1">{currentPeriod.letters} ({currentPeriod.years})</p>
            </div>
            <div className="flex gap-4 text-sm">
              <button
                onClick={() => setViewMode('overview')}
                className={`px-3 py-1 rounded ${viewMode === 'overview' ? 'bg-gray-800 text-white' : 'bg-white border'}`}
              >
                전체 개요
              </button>
              <button
                onClick={() => setViewMode('detail')}
                className={`px-3 py-1 rounded ${viewMode === 'detail' ? 'bg-gray-800 text-white' : 'bg-white border'}`}
              >
                개별 상세
              </button>
            </div>
          </div>
        </div>

        {/* 범례 */}
        <div className="bg-white rounded-lg shadow-md p-3 mb-6">
          <div className="flex flex-wrap gap-4 text-xs">
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-green-500 rounded"></div><span>완전</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-yellow-500 rounded"></div><span>단편</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded"></div><span>인용</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-purple-400 rounded"></div><span>색인/통지</span></div>
            <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-300 rounded"></div><span>미보존</span></div>
            <span className="mx-2">|</span>
            <span className="text-red-600 font-bold">★ 재배열</span>
            <span className="text-purple-600 font-bold">★★★ 정경</span>
            <span className="text-blue-600">🏠 귀환</span>
            <span className="text-amber-600">⛓️ 유배</span>
          </div>
        </div>

        {viewMode === 'overview' && (
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-lg font-semibold mb-4">편지별 사료 현황 (B&G 연대순)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="p-2 text-left">연도</th>
                    <th className="p-2 text-left">B&G 편지</th>
                    <th className="p-2 text-left">NPNF</th>
                    <th className="p-2 text-left">상태</th>
                    <th className="p-2 text-center">시리아어</th>
                    <th className="p-2 text-center">콥트어</th>
                    <th className="p-2 text-center">그리스어</th>
                    <th className="p-2 text-left">변경</th>
                  </tr>
                </thead>
                <tbody>
                  {currentLetters.map((letter, idx) => {
                    const badge = getChangesBadge(letter.changes);
                    return (
                      <tr 
                        key={letter.number + '-' + letter.year} 
                        className={`cursor-pointer hover:bg-blue-50 ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                          ${letter.reordered ? 'bg-red-50 border-l-4 border-red-500' : ''}
                          ${letter.canonLetter ? 'bg-purple-100' : ''}
                          ${letter.noLetter || letter.noticeOnly || letter.indexOnly ? 'opacity-60' : ''}
                        `}
                        onClick={() => { setSelectedLetter(letter.number); setViewMode('detail'); }}
                      >
                        <td className="p-2 font-bold">{letter.year}</td>
                        <td className="p-2 font-medium">
                          {letter.number}
                          {letter.reordered && <span className="ml-1 text-red-600 font-bold">★</span>}
                          {letter.canonLetter && <span className="ml-1 text-purple-600">★★★</span>}
                          {letter.finalLetter && <span className="ml-1">🕊</span>}
                        </td>
                        <td className="p-2 text-xs">
                          {letter.npnfNumber}
                          {letter.reordered && letter.npnfYear && (
                            <span className="ml-1 text-red-500">({letter.npnfYear}년)</span>
                          )}
                        </td>
                        <td className="p-2 text-xs">
                          {letter.reordered && (
                            <span className="px-1 bg-red-100 text-red-700 rounded mr-1 font-bold">재배열</span>
                          )}
                          {letter.noLetter && <span className="px-1 bg-gray-200 rounded mr-1">미발송</span>}
                          {letter.exile && !letter.return && <span className="px-1 bg-amber-100 text-amber-700 rounded mr-1">유배</span>}
                          {letter.return && <span className="px-1 bg-blue-100 text-blue-700 rounded mr-1">귀환</span>}
                          {letter.peace && !letter.canonLetter && !letter.reordered && <span className="px-1 bg-green-100 text-green-700 rounded mr-1">평화</span>}
                          {letter.canonLetter && <span className="px-1 bg-purple-100 text-purple-700 rounded">정경</span>}
                        </td>
                        <td className="p-2 text-center">
                          <div className={`w-5 h-5 ${getStatusColor(letter.syriacStatus)} rounded-full mx-auto`}></div>
                        </td>
                        <td className="p-2 text-center">
                          <div className={`w-5 h-5 ${getStatusColor(letter.copticStatus)} rounded-full mx-auto`}></div>
                        </td>
                        <td className="p-2 text-center">
                          <div className={`w-5 h-5 ${getStatusColor(letter.greekStatus)} rounded-full mx-auto`}></div>
                        </td>
                        <td className="p-2">
                          <span className={`px-2 py-0.5 rounded text-xs border ${badge.color}`}>{badge.text}</span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {viewMode === 'detail' && (
          <div className="grid grid-cols-12 gap-4">
            {/* 사이드바 */}
            <div className="col-span-3">
              <div className="bg-white rounded-lg shadow-md p-3 max-h-96 overflow-y-auto">
                <h4 className="font-semibold mb-2 text-sm">편지 선택 (연도순)</h4>
                <div className="space-y-1">
                  {currentLetters.map(letter => (
                    <button
                      key={letter.number + '-' + letter.year}
                      onClick={() => setSelectedLetter(letter.number)}
                      className={`w-full text-left p-2 rounded text-sm transition ${
                        selectedLetter === letter.number ? 'bg-indigo-100 border border-indigo-400' :
                        letter.reordered ? 'bg-red-50 border border-red-200' :
                        letter.noLetter ? 'bg-gray-50 opacity-60' :
                        letter.canonLetter ? 'bg-purple-50' :
                        'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">
                          <span className="text-gray-500">{letter.year}년</span> - 편지 {letter.number}
                          {letter.reordered && <span className="text-red-600 ml-1 font-bold">★</span>}
                          {letter.canonLetter && <span className="text-purple-600 ml-1">★★★</span>}
                        </span>
                      </div>
                      <div className="flex gap-1 mt-1">
                        <div className={`w-2 h-2 ${getStatusColor(letter.syriacStatus)} rounded-full`}></div>
                        <div className={`w-2 h-2 ${getStatusColor(letter.copticStatus)} rounded-full`}></div>
                        <div className={`w-2 h-2 ${getStatusColor(letter.greekStatus)} rounded-full`}></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* 상세 */}
            <div className="col-span-9">
              {selectedLetterData && (
                <div className="space-y-4">
                  <div className="bg-white rounded-lg shadow-md p-5">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold">
                          {selectedLetterData.year}년 - 부활절편지 {selectedLetterData.number}
                          {selectedLetterData.reordered && (
                            <span className="ml-2 px-2 py-1 bg-red-100 text-red-800 text-sm rounded font-bold">★ 재배열</span>
                          )}
                          {selectedLetterData.canonLetter && (
                            <span className="ml-2 px-2 py-1 bg-purple-100 text-purple-800 text-sm rounded">정경 편지</span>
                          )}
                          {selectedLetterData.noLetter && (
                            <span className="ml-2 px-2 py-1 bg-gray-200 text-gray-600 text-sm rounded">미발송</span>
                          )}
                        </h3>
                        <p className="text-gray-500 text-sm">{selectedLetterData.easterDate} | NPNF: {selectedLetterData.npnfNumber}</p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs border ${getChangesBadge(selectedLetterData.changes).color}`}>
                        {getChangesBadge(selectedLetterData.changes).text}
                      </span>
                    </div>

                    {/* 재배열 정보 강조 */}
                    {selectedLetterData.reordered && selectedLetterData.reorderInfo && (
                      <div className="bg-red-50 border-2 border-red-300 p-4 rounded-lg mb-4">
                        <h4 className="font-bold text-red-800 mb-2">★ 연대 재배열 정보</h4>
                        <div className="flex items-center justify-center gap-4">
                          <div className="text-center p-3 bg-orange-100 rounded">
                            <div className="text-xs text-gray-500">NPNF 배치</div>
                            <div className="font-bold text-lg">{selectedLetterData.reorderInfo.from}년</div>
                            <div className="text-xs">Letter {selectedLetterData.reorderInfo.npnfLetter}</div>
                          </div>
                          <div className="text-3xl">
                            {selectedLetterData.reorderInfo.direction === 'earlier' ? '⬅️' : '➡️'}
                          </div>
                          <div className="text-center p-3 bg-green-100 rounded">
                            <div className="text-xs text-gray-500">B&G 재배열</div>
                            <div className="font-bold text-lg text-green-700">{selectedLetterData.reorderInfo.to}년</div>
                            <div className="text-xs">편지 {selectedLetterData.number}</div>
                          </div>
                        </div>
                        <p className="text-center text-red-700 mt-2 font-medium">
                          {selectedLetterData.reorderInfo.years}년 {selectedLetterData.reorderInfo.direction === 'earlier' ? '앞당김' : '뒤로 이동'}
                        </p>
                      </div>
                    )}

                    <div className="bg-gray-50 p-3 rounded mb-3">
                      <h4 className="font-medium text-sm mb-1">역사적 배경</h4>
                      <p className="text-sm text-gray-700">{selectedLetterData.historicalContext}</p>
                    </div>

                    {selectedLetterData.indexNote && (
                      <div className="bg-blue-50 p-3 rounded mb-3">
                        <h4 className="font-medium text-sm text-blue-800 mb-1">색인 기록</h4>
                        <p className="text-sm text-blue-700 italic">"{selectedLetterData.indexNote}"</p>
                      </div>
                    )}

                    {selectedLetterData.criticalNote && (
                      <div className="bg-red-50 p-3 rounded border-l-4 border-red-400 mb-3">
                        <p className="text-sm text-red-800">{selectedLetterData.criticalNote}</p>
                      </div>
                    )}

                    {selectedLetterData.theologicalNote && (
                      <div className="bg-purple-50 p-3 rounded border-l-4 border-purple-400 mb-3">
                        <h4 className="font-medium text-sm text-purple-800 mb-1">핵심 내용</h4>
                        <p className="text-sm text-purple-700 italic">{selectedLetterData.theologicalNote}</p>
                      </div>
                    )}
                  </div>

                  {!selectedLetterData.noLetter && (
                    <div className="bg-white rounded-lg shadow-md p-5">
                      <h4 className="font-semibold mb-3">사료 현황</h4>
                      <div className="grid grid-cols-3 gap-3 mb-4">
                        <div className={`p-3 rounded border-2 ${selectedLetterData.syriacStatus === 'complete' ? 'border-green-400 bg-green-50' : selectedLetterData.syriacStatus === 'none' ? 'border-gray-200 bg-gray-50' : 'border-yellow-400 bg-yellow-50'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3 h-3 ${getStatusColor(selectedLetterData.syriacStatus)} rounded-full`}></div>
                            <span className="font-medium text-sm">시리아어</span>
                          </div>
                          <p className="text-xs text-gray-600">{selectedLetterData.syriacDetail}</p>
                        </div>
                        <div className={`p-3 rounded border-2 ${selectedLetterData.copticStatus === 'extensive' || selectedLetterData.copticStatus === 'fragments' ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200 bg-gray-50'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3 h-3 ${getStatusColor(selectedLetterData.copticStatus)} rounded-full`}></div>
                            <span className="font-medium text-sm">콥트어</span>
                          </div>
                          <p className="text-xs text-gray-600">{selectedLetterData.copticDetail}</p>
                        </div>
                        <div className={`p-3 rounded border-2 ${selectedLetterData.greekStatus === 'cosmas' || selectedLetterData.greekStatus === 'partial' ? 'border-blue-400 bg-blue-50' : 'border-gray-200 bg-gray-50'}`}>
                          <div className="flex items-center gap-2 mb-1">
                            <div className={`w-3 h-3 ${getStatusColor(selectedLetterData.greekStatus)} rounded-full`}></div>
                            <span className="font-medium text-sm">그리스어</span>
                          </div>
                          <p className="text-xs text-gray-600">{selectedLetterData.greekDetail}</p>
                        </div>
                      </div>

                      <div className="bg-indigo-50 p-3 rounded">
                        <h5 className="font-medium text-sm text-indigo-800 mb-1">NPNF → Brakke & Gwynn 변경 사항</h5>
                        <p className="text-xs text-indigo-600 mb-1"><strong>유형:</strong> {selectedLetterData.changeType}</p>
                        <p className="text-sm text-indigo-700">{selectedLetterData.changeDetail}</p>
                        <div className="flex gap-4 mt-2 text-xs text-gray-500">
                          <span>NPNF: {selectedLetterData.npnfPage}</span>
                          <span>B&G: {selectedLetterData.brakkeGwynn}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* 푸터 */}
        <div className="mt-6 text-center text-xs text-gray-500">
          자료 출처: Brakke & Gwynn (2022), Lefort (1955), Cureton (1848), Camplani (2003), NPNF2-04, Cosmas Indicopleustes
        </div>
      </div>
    </div>
  );
};

export default FestalLettersComplete;
