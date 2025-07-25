import { LANGUAGE, MONACO_LANGUAGE } from "@/constants/language.constant"

export type Language = typeof LANGUAGE[keyof typeof LANGUAGE]
export type MonacoLanguage = typeof MONACO_LANGUAGE[keyof typeof MONACO_LANGUAGE]