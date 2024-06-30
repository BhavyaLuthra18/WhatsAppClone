import Message from "../modal/Message.js";
import Conversation from "../modal/Conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    // message save
    await newMessage.save();
    // conversation update
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.text,
    });
    return res.status(200).json("Message has been sent successfully");
  } catch (error) {
    return res.status(500).json(error.message);
  }
};

export const getMessages = async (req, res) => {
  try {
    // getting all thee messages from that particular conservation id
    const messages = await Message.find({ conversationId: req.params.id });

    return res.status(200).json(messages);
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
