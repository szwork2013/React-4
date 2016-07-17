import Model from "../models/model";
import sanitizeHtml from "sanitize-html";
import Image from '../models/image';

/**
  *Gets all images
  *@param req
  *@param res
  *@returns void
*/

export function getImages(req, res) {
  Image.find().sort('-dateCreated').exec((err, images) => {
    if (err) {
      res.status(500).send(err);
    }
    res.json({ images });
  });
}

/**
  *Posts a new image
  *@param req
  *@param res
  *@return void
*/

export function postImage(req, res) {
  if (!req.body.post.name || !req.body.post.title || !req.body.post.content) {
    res.status(403).end();
  }

  const newImage = new Image(req.body.image);


}
