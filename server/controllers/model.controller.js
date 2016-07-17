import Model from '../models/model';
import Session from '../models/session';
import sanitizeHtml from 'sanitize-html';
import cuid from 'cuid';

/**
  Get all models
  *@param req
  *@param res
  *@returns void
*/
export function getModels(req, res) {
  console.log("req: " + req);
  Model.find().sort('name.first').exec((err, models) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ models });
  });
}

/**
  Post a new model
  *@param req
  *@param res
  *@returns void
  */

export function postModel(req, res) {
  console.log("req: " + req.body);
  console.log("res: " + res);
  if (!req.body.model.name.first || !req.body.model.name.last) {
    console.log("res status: " + res.status);
  }

  debugger;

  const newModel = new Model(req.body.post);

  newModel.name.first = sanitizeHtml(newModel.name.first);
  newModel.name.middle = sanitizeHtml(newModel.name.middle);
  newModel.name.last = sanitizeHtml(newModel.name.last);
  newModel.name.stage = sanitizeHtml(newModel.name.stage);
  newModel.dob = sanitizeHtml(newModel.dob);
  newModel.age = sanitizeHtml(newModel.age);
  newModel.gender = sanitizeHtml(newModel.gender);

  if (newModel.dob) {
    var diff = new Date - newModel.dob;

    var diffDays = diff / 1000 / (60 * 60 *24);
    newModel.age = Math.floor(diffdays / 365.25);

    if (newModel.age < 18)
    {
      newModel.isMinor = true;
    }
  }

  newModel.save((err, saved) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ newModel });
  });
}

/**
  Get all models
  *@param req
  *@param res
  *@returns void
*/

export function getModelById(req, res) {
  Model.findOne({ id: req.params.id }).exec((err, model) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ model });
  });
}

/**
  Get all models
  *@param req
  *@param res
  *@returns void
*/

export function deleteModel(req, res) {
  Model.findOne({ id: req.params.id }).exec((err, model) => {
    if (err) {
      res.status(500).send(err);
    }

    model.remove(() => {
      res.status(200).end();
    });
  });
}
