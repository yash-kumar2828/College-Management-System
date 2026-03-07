import Notice from '../model/notice.model.js'


export const createNotice = async (req, res) => {
  try {
    const { title, message, date } = req.body;

    const notice = await Notice.create({
      title,
      message,
      date,
    });

    res.status(201).json({
      success: true,
      data: notice,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


export const getLatestNotices = async (req, res) => {
  try {
    const notices = await Notice.find()
      .sort({ date: -1 }) 
      .limit(3);       

    res.status(200).json({
      success: true,
      count: notices.length,
      data: notices,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};