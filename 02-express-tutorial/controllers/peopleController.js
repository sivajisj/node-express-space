
let {people}  =require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people });
  }
const createPerson = (req, res) => {
    const { name } = req.body;
    if (!name) {
      return res
        .status(400)
        .json({ Success: false, msg: "please provide name value" });
    }
    res.status(201).send({ success: true, person: name });
  }

const createPersonThunderClient = (req,res)=>{
    const {name} = req.body;
    if(!name){
      return res.status(400).json({success :false ,msg:"please provide name value"})
    }
    res.status(201).send({success:true,data:[...people,name]})
  
  }

const updatePerson = (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    const person = people.find((person) => person.id === Number(id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: "please provide a name value" });
    }
  
    const newPeople = people.map((person) => {
      if (person.id === Number(id)) {
        person.name = name;
      }
      return person;
    });
    res.status(200).json({ success: true, data: newPeople });
  }

  const deletePerson = (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id));
    if (!person) {
      return res
        .status(404)
        .json({ success: false, msg: ` id:${req.params.id} doesn't exist` });
    }
    const newPeople = people.filter(
      (person) => person.id !== Number(req.params.id)
    );
    return res.status(200).json({ success: true, data: newPeople });
  }
  module.exports = {
    getPeople,
    createPerson,
    createPersonThunderClient,
    updatePerson,
    deletePerson
  
  }