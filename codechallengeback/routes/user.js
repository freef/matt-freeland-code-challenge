import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const users = await req.context.models.User.findAll();
  return res.send(users);
});

router.get('/:userId', async (req, res) => {
  const user = await req.context.models.User.findByPk(req.params.userId);
  return res.send(user);
});

router.patch('/:userId/d', async (req, res) => {

  const amount = req.body.amount
  const receiver = await req.context.models.User.findByPk(req.params.userId)
  const giver = await req.context.models.User.findByPk(req.context.me.id)
  const giverBal = giver.credits - amount
  const receiverBal = parseInt(receiver.credits) + parseInt(amount)
  console.log(receiverBal)
  if (giverBal>=0){
    const updateGiver = await req.context.models.User.update({credits: giverBal}, {where: {id:req.context.me.id}})
    const updatReceiver = await req.context.models.User.update({credits: receiverBal}, {where: {id:req.params.userId}})
    const createRecord = await req.context.models.Message.create({
      amount: req.body.amount,
      senderId: req.context.me.id,
      recipientId: receiver.id
    })
    res.send('new balance is ' + giverBal + ' credits')
  } else {
    res.send('Not enough credits!')
  }
  })

export default router;

//
// try {
//   const result = await Project.update(
//     { title: 'a very different title now' },
//     { where: { _id: 1 } }
//   )
//   handleResult(result)
// } catch (err) {
//   handleError(err)
// }
