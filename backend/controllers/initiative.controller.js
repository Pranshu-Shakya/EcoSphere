import Initiative from "../models/Initiative.model.js";
import User from "../models/user.model.js";

const createInitiative = async (req, res) => {
  try {
    const { userId, title, description, imgUrl, category, location } = req.body;

    const Initiativeinfo = {
      leader: userId,
      title,
      description,
      imgUrl,
      category,
      location,
      members: [userId],
    };
    const MakeInitiative = new Initiative(Initiativeinfo);
    const InitiativeSuccess = await MakeInitiative.save();
    res.status(201).json({ message: "Initiative created successfully!" });
  } catch (err) {
    console.error("Error creating initiative:", err);
    res.status(500).json({ message: "Failed to create initiative." });
  }
};

const getInitiatives = async (req, res) => {
  try {
    const initiatives = await Initiative.find({}).populate("leader");
    res.status(200).json({ List : initiatives });
  } catch (err) {
    console.error("Error fetching initiatives:", err);
    res.status(500).json({ message: "Failed to fetch initiatives." });
  }
};

const memberAction = async (req, res) => {
  try {
    const { initiativeId, userId, action } = req.body;
    // Find the initiative and update its members based on the action

    const initiative = await Initiative.findById(initiativeId);
    if(userId==initiative.leader){
        res.status(200).json("You are the leader of this initiative.");
        return;
    }
    if (action === "join") {
      await Initiative.findByIdAndUpdate(
        initiativeId,
        { $addToSet: { members: userId } },
        { new: true }
      );
      await User.findByIdAndUpdate(
        userId,
        { $addToSet: { initiatives: initiativeId } },
        { new: true }
      );


    } else if (action === "leave") {
      await Initiative.findByIdAndUpdate(initiativeId, {
        $pull: { members: userId },
      });
      await User.findByIdAndUpdate(userId, {
        $pull: { initiatives: initiativeId },
      });
    } else {
      return res.status(400).json({ message: "Invalid action." });
    }
    return res
      .status(200)
      .json({ message: "Member action processed successfully." });
  } catch (err) {
    console.error("Error processing member action:", err);
    res.status(500).json({ message: "Failed to process member action." });
  }
};

const fetchJoins = async (req, res) => {
  try {
    const {id} = req.params;
    const initiative = await  Initiative.findById(id);

    if (!initiative) {
      return res.status(404).json({ message: "Article not found" });
    }

    const joinCount = initiative.members.length;
    const joinArray=initiative.members;

   
    return res.status(200).json({
      joins:joinCount,
      joinArray:joinArray
   
    });
  } catch (err) {
    return res.status(500).json({ message: "Server error" });
  }
};


export { createInitiative, getInitiatives, memberAction,fetchJoins};
