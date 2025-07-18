import { TestCase } from "@/types/testcase.type"
import { create } from "zustand"

interface TestcaseStore {
  testcases: TestCase[]
  setTestcases: (testcases: TestCase[]) => void
  addTestcase: (testcase: TestCase) => void
  updateTestcase: (index: number, testcase: TestCase) => void
  deleteTestcase: (index: number) => void
}


export const useTestcaseStore = create<TestcaseStore>((set) => ({
  testcases: [],
  setTestcases: (testcases) => set({ testcases }),
  addTestcase: (testcase) => set((state) => ({ testcases: [...state.testcases, testcase] })),
  updateTestcase: (index, testcase) => set((state) => ({ testcases: state.testcases.map((t, i) => i === index ? testcase : t) })),
  deleteTestcase: (index) => set((state) => ({ testcases: state.testcases.filter((_, i) => i !== index) })),
}))