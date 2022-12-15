const institutionModel = require('../models/institutionModel')
const instanceModel = require('../models/donorModel')

const findAllInstitutions = async (req, res) => {
  try {
    const allinstitutions = await institutionModel
      .find()
      .populate('Institution')
    res.status(200).json(allInstitutions)
  } catch {
    res.status(500).json({ message: error.message })
  }
}

const findInstitutionById = async (req, res) => {
  try {
    const findInstitution = await institutionModel
      .findById(req.params.id)
      .populate('Institution')
    if (findInstitution == null) {
      res.status(404).json({ message: 'Institution Not Found' })
    }
    res.status(200).json(findInstitution)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const addNewInstitution = async (req, res) => {
  try {
    const {
      donorId,
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber
    } = req.body

    if (!donorId) {
      return res.status(400).json({ message: 'Required: Enter the Donor ID' })
    }

    const findInstitution = await institutionModel.findInstitutionById(donorId)

    if (!findInstitution) {
      return res.status(404).json({ message: 'Institution Not Found' })
    }

    const newInstitution = new institutionModel({
      donor: donorId,
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber
    })
    const savedInstitution = await newInstitution.save()
    res
      .status(200)
      .json({ message: 'New Institution added successfully', savedInstitution })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

const updateInstitution = async (req, res) => {
  try {
    const { id } = req.params
    const {
      donorId,
      institutionName,
      address,
      description,
      socialCause,
      pix,
      phoneNumber
    } = req.body
    const findInstitution = await institutionModel.findById(id)
    if (findInstitution == null) {
      res.status(404).json({ message: 'Institution Not Found' })
    }

    if (donorId) {
      const findDonor = await donorModel.findById(donorId)
      if (findDonor == null) {
        return res.status(404).json({ message: 'Institution Not Found' })
      }
    }

    const savedInstitution = await findInstitution.save()
    res
      .status(200)
      .json({ message: 'Institution successfully updated', savedInstitution })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params
    const findInstitution = await institutionModel.findById(id)

    if (findInstitution == null) {
      return res
        .status(404)
        .json({ message: `Institution with id ${id} Not Found` })
    }
    await findInstitution.remove()
    res
      .status(200)
      .json({ message: `Institution with id ${id} was successfully deleted` })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  findAllInstitutions,
  findInstitutionById,
  addNewInstitution,
  updateInstitution,
  deleteInstitution
}
