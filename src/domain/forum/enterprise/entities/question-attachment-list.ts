import { WatchedList } from 'src/core/entities/watched-list'
import { QuestionAttachments } from './question-attachment'

export class QuestionAttachmentList extends WatchedList<QuestionAttachments> {
  compareItems(a: QuestionAttachments, b: QuestionAttachments): boolean {
    return a.attachmentId === b.attachmentId
  }
}
