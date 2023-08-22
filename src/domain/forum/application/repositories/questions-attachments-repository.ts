import { QuestionAttachments } from '../../enterprise/entities/question-attachment'

export interface QuestionAttachmentsRepository {
  findManyByQuestionId(questionId: string): Promise<QuestionAttachments[]>
}
