const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
  id: ObjectId,
  title: String,
  description: String,
  thumbsUrl: String,
  documentUrl: String,
  thumbAttachmentId: Number,
  isOtherSource: Number,
  bookTypeId: Number,
  bookGroupId: Number,
  languageId: Number,
  languageName: String,
  publishYear: Number,
  subjectId: Number,
  author: String,
  editorChiefs: String,
  editors: String,
  schoolPublishingCompanyId: Number,
  pages: Number,
  isFree: Number,
  gradeCode: Number,
  subjectCode: String,
  abilityId: Number,
  qualityId: Number,
  status: Number,
  publishAt: String,
  publishStatus: Number,
  allowDownload: Number,
  allowCopy: Number,
  allowShare: Number,
  totalView: Number,
  totalDownload: Number,
  totalLike: Number,
  bookTypeName: String,
  bookGroupName: String,
  subjectName: String,
  abilityName: String,
  qualityName: String,
  gradeName: String,
  schoolPublishingCompanyName: String,
  permissionCode: Number,
  versionId: String,
  toc: Number,
  isTocConFig: Number,
});
