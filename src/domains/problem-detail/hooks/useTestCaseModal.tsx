"use client"

import { useTestcaseStore } from "@/lib/stores/useTestcaseStore";
import { TestCase } from "@/types/testcase.type";
import { useCallback, useMemo } from "react";
import { useTestCase } from "@/contexts";

export function useTestCaseModal() {
  const { openTestCaseModal } = useTestCase();
  
  // Zustand 스토어에서 각 값을 개별적으로 참조
  const testcases = useTestcaseStore((state) => state.testcases);
  const setTestcases = useTestcaseStore((state) => state.setTestcases);
  const openModal = useCallback(async (): Promise<TestCase[] | undefined> => {
    const result = await openTestCaseModal(testcases);
    return Array.isArray(result) ? result : undefined;
  }, [openTestCaseModal, testcases]);

  return useMemo(
    () => ({
      testcases,
      openModal,
      setTestcases,
    }),
    [
      testcases,
      openModal,
      setTestcases,
    ]
  );
}