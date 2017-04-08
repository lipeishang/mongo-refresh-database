import mongoose from 'mongoose';

const TaskItem = mongoose.model('TaskItem',{
  username: String,
  content: String,
  regtime: String
});

export default TaskItem;