"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import { Button } from "@/components/ui/Button"
import { Chip } from "@/components/ui/Chip"
import { cn } from "@/lib/utils"
import { useProblemTypeFilter } from "../hooks/useProblemTypeFilter"
import type { ProblemType } from "@/types/problem.type"
import { PROBLEM_TYPE } from "@/constants/problem.constant"

interface ProblemTypeFilterProps {
  typeList: ProblemType[]
  placeholder?: string
  disabled?: boolean
  className?: string
}

// 문제 유형 목록을 그룹별로 정리 (모든 상수 포함)
const PROBLEM_TYPE_GROUPS = [
  {
    name: "기본 알고리즘",
    types: [
      PROBLEM_TYPE.구현,
      PROBLEM_TYPE.브루트포스_알고리즘,
      PROBLEM_TYPE.그리디_알고리즘,
      PROBLEM_TYPE.정렬,
      PROBLEM_TYPE.이분_탐색,
      PROBLEM_TYPE.두_포인터,
      PROBLEM_TYPE.시뮬레이션,
      PROBLEM_TYPE.해_구성하기,
      PROBLEM_TYPE.많은_조건_분기,
      PROBLEM_TYPE.백트래킹,
      PROBLEM_TYPE.분할_정복,
      PROBLEM_TYPE.재귀,
      PROBLEM_TYPE.스위핑,
      PROBLEM_TYPE.매개_변수_탐색,
      PROBLEM_TYPE.삼분_탐색,
      PROBLEM_TYPE.중간에서_만나기,
      PROBLEM_TYPE.슬라이딩_윈도우,
      PROBLEM_TYPE.애드_혹,
    ]
  },
  {
    name: "자료구조",
    types: [
      PROBLEM_TYPE.자료_구조,
      PROBLEM_TYPE.스택,
      PROBLEM_TYPE.큐,
      PROBLEM_TYPE.덱,
      PROBLEM_TYPE.우선순위_큐,
      PROBLEM_TYPE.해시를_사용한_집합과_맵,
      PROBLEM_TYPE.트리를_사용한_집합과_맵,
      PROBLEM_TYPE.세그먼트_트리,
      PROBLEM_TYPE.느리게_갱신되는_세그먼트_트리,
      PROBLEM_TYPE.퍼시스턴트_세그먼트_트리,
      PROBLEM_TYPE.다차원_세그먼트_트리,
      PROBLEM_TYPE.머지_소트_트리,
      PROBLEM_TYPE.분리_집합,
      PROBLEM_TYPE.트리,
      PROBLEM_TYPE.스플레이_트리,
      PROBLEM_TYPE.링크_컷_트리,
      PROBLEM_TYPE.레드_블랙_트리,
      PROBLEM_TYPE.데카르트_트리,
      PROBLEM_TYPE.탑_트리,
      PROBLEM_TYPE.연결_리스트,
      PROBLEM_TYPE.비트_집합,
      PROBLEM_TYPE.희소_배열,
      PROBLEM_TYPE.값_좌표_압축,
      PROBLEM_TYPE.로프,
    ]
  },
  {
    name: "그래프",
    types: [
      PROBLEM_TYPE.그래프_이론,
      PROBLEM_TYPE.그래프_탐색,
      PROBLEM_TYPE.너비_우선_탐색,
      PROBLEM_TYPE.깊이_우선_탐색,
      PROBLEM_TYPE.최단_경로,
      PROBLEM_TYPE.데이크스트라,
      PROBLEM_TYPE.플로이드_워셜,
      PROBLEM_TYPE.벨만_포드,
      PROBLEM_TYPE.zero_one_너비_우선_탐색,
      PROBLEM_TYPE.최소_스패닝_트리,
      PROBLEM_TYPE.유향_최소_신장_트리,
      PROBLEM_TYPE.최대_유량,
      PROBLEM_TYPE.최소_비용_최대_유량,
      PROBLEM_TYPE.최대_유량_최소_컷_정리,
      PROBLEM_TYPE.이분_매칭,
      PROBLEM_TYPE.일반적인_매칭,
      PROBLEM_TYPE.이분_그래프,
      PROBLEM_TYPE.강한_연결_요소,
      PROBLEM_TYPE.이중_연결_요소,
      PROBLEM_TYPE.단절점과_단절선,
      PROBLEM_TYPE.위상_정렬,
      PROBLEM_TYPE.방향_비순환_그래프,
      PROBLEM_TYPE.최소_공통_조상,
      PROBLEM_TYPE.오일러_경로,
      PROBLEM_TYPE.오일러_경로_테크닉,
      PROBLEM_TYPE.센트로이드,
      PROBLEM_TYPE.센트로이드_분할,
      PROBLEM_TYPE.heavy_light_분할,
      PROBLEM_TYPE.two_sat,
      PROBLEM_TYPE.선인장,
      PROBLEM_TYPE.평면_그래프,
      PROBLEM_TYPE.쌍대_그래프,
      PROBLEM_TYPE.현_그래프,
      PROBLEM_TYPE.함수형_그래프,
      PROBLEM_TYPE.서큘레이션,
      PROBLEM_TYPE.트리_압축,
      PROBLEM_TYPE.트리_분할,
      PROBLEM_TYPE.트리_동형_사상,
      PROBLEM_TYPE.도미네이터_트리,
      PROBLEM_TYPE.오프라인_동적_연결성_판정,
      PROBLEM_TYPE.양방향_탐색,
    ]
  },
  {
    name: "다이나믹 프로그래밍",
    types: [
      PROBLEM_TYPE.다이나믹_프로그래밍,
      PROBLEM_TYPE.트리에서의_다이나믹_프로그래밍,
      PROBLEM_TYPE.비트필드를_이용한_다이나믹_프로그래밍,
      PROBLEM_TYPE.배낭_문제,
      PROBLEM_TYPE.가장_긴_증가하는_부분_수열_o_n_log_n,
      PROBLEM_TYPE.덱을_이용한_다이나믹_프로그래밍,
      PROBLEM_TYPE.커넥션_프로파일을_이용한_다이나믹_프로그래밍,
      PROBLEM_TYPE.자릿수를_이용한_다이나믹_프로그래밍,
      PROBLEM_TYPE.부분집합의_합_다이나믹_프로그래밍,
      PROBLEM_TYPE.외판원_순회_문제,
      PROBLEM_TYPE.분할_정복을_사용한_최적화,
      PROBLEM_TYPE.크누스_최적화,
      PROBLEM_TYPE.볼록_껍질을_이용한_최적화,
      PROBLEM_TYPE.함수_개형을_이용한_최적화,
      PROBLEM_TYPE.덱을_이용한_구간_최댓값_트릭,
      PROBLEM_TYPE.단조_큐를_이용한_최적화,
      PROBLEM_TYPE.aliens_트릭,
    ]
  },
  {
    name: "수학",
    types: [
      PROBLEM_TYPE.수학,
      PROBLEM_TYPE.사칙연산,
      PROBLEM_TYPE.정수론,
      PROBLEM_TYPE.조합론,
      PROBLEM_TYPE.소수_판정,
      PROBLEM_TYPE.유클리드_호제법,
      PROBLEM_TYPE.확장_유클리드_호제법,
      PROBLEM_TYPE.에라토스테네스의_체,
      PROBLEM_TYPE.밀러_라빈_소수_판별법,
      PROBLEM_TYPE.분할_정복을_이용한_거듭제곱,
      PROBLEM_TYPE.모듈로_곱셈_역원,
      PROBLEM_TYPE.페르마의_소정리,
      PROBLEM_TYPE.오일러_피_함수,
      PROBLEM_TYPE.중국인의_나머지_정리,
      PROBLEM_TYPE.뫼비우스_반전_공식,
      PROBLEM_TYPE.뤼카_정리,
      PROBLEM_TYPE.이산_로그,
      PROBLEM_TYPE.이산_제곱근,
      PROBLEM_TYPE.이산_k제곱근,
      PROBLEM_TYPE.포함_배제의_원리,
      PROBLEM_TYPE.비둘기집_원리,
      PROBLEM_TYPE.확률론,
      PROBLEM_TYPE.기댓값의_선형성,
      PROBLEM_TYPE.베이즈_정리,
      PROBLEM_TYPE.생일_문제,
      PROBLEM_TYPE.번사이드_보조정리,
      PROBLEM_TYPE.지수승강_보조정리,
      PROBLEM_TYPE.린드스트롬_게셀_비엔노_보조정리,
      PROBLEM_TYPE.폴라드_로,
      PROBLEM_TYPE.벌리캠프_매시,
      PROBLEM_TYPE.임의_정밀도_큰_수_연산,
      PROBLEM_TYPE.유리_등차수열의_내림_합,
      PROBLEM_TYPE.누적_합,
      PROBLEM_TYPE.피타고라스_정리,
      PROBLEM_TYPE.순열_사이클_분할,
      PROBLEM_TYPE.키타마사,
      PROBLEM_TYPE.생성_함수,
      PROBLEM_TYPE.통계학,
      PROBLEM_TYPE.차수열,
    ]
  },
  {
    name: "문자열",
    types: [
      PROBLEM_TYPE.문자열,
      PROBLEM_TYPE.kmp,
      PROBLEM_TYPE.트라이,
      PROBLEM_TYPE.아호_코라식,
      PROBLEM_TYPE.z_알고리즘,
      PROBLEM_TYPE.라빈_카프,
      PROBLEM_TYPE.접미사_배열과_lcp_배열,
      PROBLEM_TYPE.접미사_트리,
      PROBLEM_TYPE.회문_트리,
      PROBLEM_TYPE.파싱,
      PROBLEM_TYPE.정규_표현식,
      PROBLEM_TYPE.해싱,
      PROBLEM_TYPE.utf8_입력_처리,
    ]
  },
  {
    name: "기하학",
    types: [
      PROBLEM_TYPE.기하학,
      PROBLEM_TYPE.삼차원_기하학,
      PROBLEM_TYPE.차원_기하학,
      PROBLEM_TYPE.볼록_껍질,
      PROBLEM_TYPE.선분_교차_판정,
      PROBLEM_TYPE.다각형의_넓이,
      PROBLEM_TYPE.볼록_다각형_내부의_점_판정,
      PROBLEM_TYPE.오목_다각형_내부의_점_판정,
      PROBLEM_TYPE.회전하는_캘리퍼스,
      PROBLEM_TYPE.반평면_교집합,
      PROBLEM_TYPE.최소_외접원,
      PROBLEM_TYPE.보로노이_다이어그램,
      PROBLEM_TYPE.델로네_삼각분할,
      PROBLEM_TYPE.픽의_정리,
      PROBLEM_TYPE.오일러_지표,
      PROBLEM_TYPE.도형에서의_불_연산,
      PROBLEM_TYPE.그린_정리,
    ]
  },
  {
    name: "고급 알고리즘",
    types: [
      PROBLEM_TYPE.제곱근_분할법,
      PROBLEM_TYPE.mos,
      PROBLEM_TYPE.오프라인_쿼리,
      PROBLEM_TYPE.병렬_이분_탐색,
      PROBLEM_TYPE.런타임_전의_전처리,
      PROBLEM_TYPE.작은_집합에서_큰_집합으로_합치는_테크닉,
      PROBLEM_TYPE.비트마스킹,
      PROBLEM_TYPE.무작위화,
      PROBLEM_TYPE.휴리스틱,
      PROBLEM_TYPE.담금질_기법,
      PROBLEM_TYPE.플러드_필,
      PROBLEM_TYPE.고속_푸리에_변환,
      PROBLEM_TYPE.선형대수학,
      PROBLEM_TYPE.가우스_소거법,
      PROBLEM_TYPE.미적분학,
      PROBLEM_TYPE.수치해석,
      PROBLEM_TYPE.물리학,
      PROBLEM_TYPE.경사_하강법,
      PROBLEM_TYPE.다항식_보간법,
      PROBLEM_TYPE.춤추는_링크,
      PROBLEM_TYPE.크누스_x,
      PROBLEM_TYPE.히르쉬버그,
      PROBLEM_TYPE.스토어_바그너,
      PROBLEM_TYPE.차분_공격,
    ]
  },
  {
    name: "게임 이론",
    types: [
      PROBLEM_TYPE.게임_이론,
      PROBLEM_TYPE.스프라그_그런디_정리,
      PROBLEM_TYPE.하켄부시_게임,
      PROBLEM_TYPE.안정_결혼_문제,
      PROBLEM_TYPE.홀의_결혼_정리,
      PROBLEM_TYPE.헝가리안,
      PROBLEM_TYPE.매내처,
      PROBLEM_TYPE.보이어_무어_다수결_투표,
    ]
  },
  {
    name: "기타",
    types: [
      PROBLEM_TYPE.매트로이드,
      PROBLEM_TYPE.쌍대성,
      PROBLEM_TYPE.선형_계획법,
      PROBLEM_TYPE.다중_대입값_계산,
    ]
  }
]

export function ProblemTypeFilter({
  typeList,
  placeholder = "유형 선택",
  disabled = false,
  className,
}: ProblemTypeFilterProps) {
  const {
    isOpen,
    tempSelectedTypes,
    buttonText: hookButtonText,
    handleOpenChange,
    handleChipClick,
    handleConfirm,
    handleCancel,
  } = useProblemTypeFilter({ typeList })

  const buttonText = hookButtonText === "유형 선택" ? placeholder : hookButtonText

  return (
    <Popover open={isOpen} onOpenChange={handleOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={isOpen}
          size="sm"
          className={cn(
            "w-[120px] h-9 justify-between text-sm font-medium",
            "border-gray-300 bg-white hover:bg-gray-50 text-gray-700",
            "rounded-lg shadow-sm transition-all duration-200",
            "focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500",
            className
          )}
          disabled={disabled}
        >
          <span className="truncate">{buttonText}</span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-60" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[600px] max-w-[90vw] p-0 border-0 shadow-lg rounded-xl" align="start" sideOffset={8}>
        <div className="bg-white rounded-xl">
          {/* 스크롤 영역 - 패딩을 제외하고 순수 콘텐츠만 */}
          <div className="max-h-80 overflow-y-auto overflow-x-hidden overscroll-contain">
            <div className="p-6 space-y-6">
              {PROBLEM_TYPE_GROUPS.map((group) => (
                <div key={group.name} className="space-y-3">
                  <h4 className="text-sm font-semibold text-gray-800">{group.name}</h4>
                  <div className="flex flex-wrap gap-2">
                    {group.types.map((type) => {
                      const isSelected = tempSelectedTypes.includes(type)
                      return (
                        <Chip
                          key={type}
                          variant={isSelected ? "filled" : "outlined"}
                          color="blue"
                          size="small"
                          onClick={() => handleChipClick(type)}
                          className="cursor-pointer transition-all font-medium"
                        >
                          {type}
                        </Chip>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* 확인/취소 버튼 - 스크롤 영역 외부에 고정 */}
          <div className="flex justify-end gap-2 p-6 pt-4 border-t border-gray-100">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCancel}
              className="text-xs text-gray-600 hover:text-gray-800 hover:bg-gray-100 px-3 py-1.5 h-7 rounded-md font-medium"
            >
              취소
            </Button>
            <Button
              size="sm"
              onClick={handleConfirm}
              className="text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 h-7 rounded-md font-medium shadow-sm"
            >
              확인
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}