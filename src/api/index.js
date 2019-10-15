import { version } from "../../package.json";
import { Router } from "express";

export default ({ config, db }) => {
  let api = Router();

  //category_details TABLE

  api.get("/category", (req, res) => {
    //category_details table and return the category
    db.query("SELECT * from category_details where active=true", (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "categories": response.rows });
      }
    });


  });
  // perhaps expose some API metadata at the root
  api.get("/category/:cid", (req, res) => {
    //find cid in category_details table and return the category

    db.query(`SELECT * from category_details where uuid='${req.params.cid}' and active=true`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "categories": response.rows });
      }
    });
  });

  api.post("/category", (req, res) => {
    //take category_details from req and insert into category_details table
    const { category_name, created_by } = req.body;

    const uuidv1 = require('uuid/v1');
    const uuid = uuidv1()

    const created_time = new Date().getTime();

    db.query(`insert into category_details(uuid,category_name,created_by,created_time,active) values('${uuid}','${category_name}','${created_by}','${created_time}',true)`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "status": "successfull", "response": response.rows });
        }
      });
  });

  api.put("/category/:cid", (req, res) => {

    const { category_name, updated_by } = req.body;
    const updated_time = new Date().getTime();

    //take category_details cid from path and find the cid and update
    db.query(`update category_details set category_name='${category_name}', updated_by='${updated_by}', updated_time='${updated_time}' where uuid='${req.params.cid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "put" });
        }
      })
  });

  api.delete("/category/:cid", (req, res) => {
    console.log("req", req.params);
    //take category_details cid from path and find the cid and update flag
    db.query(`update category_details set active=false where uuid='${req.params.cid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "delete" });
        }
      })
  })

  //public_key_details TABLE

  api.get("/public_key", (req, res) => {
    //public_key_details table and return the public_key
    db.query(`SELECT * from public_key_details where active=true`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "public_key": response.rows });
        }
      })
  })

  // perhaps expose some API metadata at the root
  api.get("/public_key/:pkid", (req, res) => {
    //find cid in category_details table and return the category

    db.query(`SELECT * from public_key_details where uuid='${req.params.pkid}' and active=true`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "public_key": response.rows });
        }
      });
  });


  api.post("/public_key", (req, res) => {
    //take public_key_details from req and insert into public_key_details table
    const { start_date, end_date, created_by } = req.body;

    const uuidv1 = require('uuid/v1');
    const uuid = uuidv1()

    const created_time = new Date().getTime();

    db.query(`insert into public_key_details(uuid,start_date,end_date,created_by,created_time,active) values('${uuid}','${start_date}','${end_date}','${created_by}','${created_time}',true)`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "status": "successfull", "response": response.rows });
        }
      });
  });


  api.put("/public_key/:pkid", (req, res) => {
    console.log("req", req.params);
    console.log("body", req.body);

    const { end_date, updated_by } = req.body;
    const updated_time = new Date().getTime();

    //take public_key_details cid from path and find the pkid and update
    db.query(`update public_key_details set end_date='${end_date}', updated_by='${updated_by}', updated_time='${updated_time}' where uuid='${req.params.pkid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "put" });
        }
      })
  });

  api.delete("/public_key/:pkid", (req, res) => {
    console.log("req", req.params);
    //take public_key_details cid from path and find the pkid and update flag
    db.query(`update public_key_details set active=false where uuid='${req.params.pkid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "delete" });
        }
      })
  })


  //complain_details TABLE

  api.get("/complain", (req, res) => {
    //complain_details table and return the complain_id
    db.query(`SELECT * from complain_details where active=true`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "complain": response.rows });
        }
      })
  })

  // perhaps expose some API metadata at the root
  api.get("/complain/:cpid", (req, res) => {
    //find cid in category_details table and return the complain

    db.query(`SELECT * from complain_details where uuid='${req.params.cpid}' and active=true`, (err, response) => {
      if (err) {
        console.log(err.stack);
      } else {
        console.log(response.rows);
        res.json({ "complain": response.rows });
      }
    });
  });


  api.post("/complain", (req, res) => {
    //take complain_details from req and insert into complain_details table
    const { category_name, complain_details, picture, type, created_by } = req.body;
    const user_id = null
    const uuidv1 = require('uuid/v1');
    const uuid = uuidv1()

    const created_time = new Date().getTime();

    db.query(`insert into complain_details(uuid,category_name,complain_details,picture,user_id,status,type,created_by,created_time,active) values('${uuid}','${category_name}','${complain_details}','${picture}','${user_id}','pending','${type}','${created_by}','${created_time}',true)`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ "status": "successfull", "response": response.rows });
        }
      });
  });


  api.put("/complain/:cpid", (req, res) => {
    console.log("req", req.params);
    console.log("body", req.body);

    const { comment, updated_by } = req.body;
    const updated_time = new Date().getTime();

    //take complain_details cid from path and find the cpid and update
    db.query(`update complain_details set status='Completed', comment='${comment}',updated_by='${updated_by}', updated_time='${updated_time}' where uuid='${req.params.cpid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "put" });
        }
      })
  });

  api.delete("/complain/:cpid", (req, res) => {
    console.log("req", req.params);
    //take complain_details cid from path and find the pkid and update flag
    db.query(`update complain_details set active=false where uuid='${req.params.cpid}'`,
      (err, response) => {
        if (err) {
          console.log(err.stack);
        } else {
          console.log(response.rows);
          res.json({ version, status: "live", method: "delete" });
        }
      })
  })


  return api;
};
