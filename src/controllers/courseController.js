const courses = [
  { id: 1, title: "123" },
  { id: 2, title: "222" },
  { id: 3, title: "333" },
];

const getCourseList = async (req, res) => {
  try {
    const { cateId } = req.query;
    console.log(cateId);
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

const getCourseDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const result = courses.find((item) => item.id == id);
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(200).json({ message: `${id} not found` });
    }
  } catch (error) {
    res.status(500).json({
      message: error.toString(),
    });
  }
};

export default { getCourseList, getCourseDetail };
