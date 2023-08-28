import { QuestionAttachmentsRepository } from 'src/domain/forum/application/repositories/questions-attachments-repository'
import { QuestionAttachments } from 'src/domain/forum/enterprise/entities/question-attachment'

export class InMemoryQuestionAttachmentsRepository
  implements QuestionAttachmentsRepository
{
  public items: QuestionAttachments[] = []
  async findManyByQuestionId(questionId: string) {
    const questionAttachments = this.items.filter(
      (item) => item.questionId.toString() === questionId,
    )

    return questionAttachments
  }
}
