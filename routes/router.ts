import { Router, Request, Response } from "express";


const router = Router();

router.get('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'Todo está bien'
  });
});
router.post('/mensajes', (req: Request, res: Response) => {
  res.json({
    ok: true,
    msg: 'POST - Todo está bien'
  });
});
router.post('/mensajes/:id', (req: Request, res: Response) => {
  const id = req.params.id;
  console.log({ id });

  res.json({
    ok: true,
    msg: 'POST - Todo está bien'
  });
});
export default router;

