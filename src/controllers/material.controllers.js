const { material: materialModels, progress: progressModels } = require("../models");

const index = async (req, res, next) => {
  const { id_sub_bab } = req.query;

  const material = await materialModels.findAll({
    where: id_sub_bab ? { id_sub_bab } : {},
    attributes: [
      "id",
      "nama_material",
      "tipe_material",
      "exp",
      "gold",
      [
        materialModels.sequelize.literal(
          `(select case when count(p.id) > 0 then 'selesai' else 'belum selesai' end from progresses as p where p.id_material = material.id and p.status_progress = 1 and p.id_user = ${req.user.id})`
        ),
        "status",
      ],
    ],
  });

  return res.send({
    message: "success",
    data: material,
  });
};

module.exports = {
  index,
};
