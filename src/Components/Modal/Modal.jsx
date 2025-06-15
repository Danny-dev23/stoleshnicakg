import React, { useState } from "react";
import { Modal, Box, TextField, Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const TELEGRAM_BOT_TOKEN = "7575638563:AAGMwpwfX61x9OJ9R4J2DIHFt54b5sYi2a4";
const CHAT_ID = "-4656177173";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  borderRadius: "8px",
  boxShadow: 24,
  p: 4,
};

const CalculateModal = ({ open, handleClose, product }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const resetForm = () => {
    setBlocks([{ id: 1, width: "", length: "" }]);
  };
  const handleModalClose = () => {
    resetForm();
    handleClose();
  };

  const sendToTelegram = async () => {
    try {
      setIsLoading(true);
      const message = `
🆕 Новая заявка на расчет:

📞 Телефон для связи: ${phoneNumber}
📦 Категория: ${product?.category}
🎨 Цвет: ${product?.color}

📏 Размеры:
${blocks
  .map(
    (block, index) => `
Блок ${index + 1}:
- Ширина: ${block.width} мм
- Длина: ${block.length} мм
`
  )
  .join("\n")}
      `;

      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: "HTML",
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Ошибка при отправке сообщения");
      }

      alert("Заявка успешно отправлена!");
      resetForm();
      handleClose();
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке заявки");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCalculate = () => {
    // Проверка заполнения всех полей
    const isValid = blocks.every((block) => block.width && block.length);
    if (!isValid) {
      alert("Пожалуйста, заполните все размеры");
      return;
    }

    sendToTelegram();
  };

  const [blocks, setBlocks] = useState([{ id: 1, width: "", length: "" }]);

  const handleAddBlock = () => {
    setBlocks([...blocks, { id: blocks.length + 1, width: "", length: "" }]);
  };

  const handleRemoveBlock = (id) => {
    if (blocks.length > 1) {
      setBlocks(blocks.filter((block) => block.id !== id));
    }
  };

  const handleChange = (id, field, value) => {
    setBlocks(
      blocks.map((block) =>
        block.id === id ? { ...block, [field]: value } : block
      )
    );
  };

  return (
    <Modal open={open} onClose={handleModalClose}>
      <Box sx={style}>
        <div className="modal-content">
          <h2>Расчет стоимости</h2>

          <div className="product-info">
            <img
              src={product?.image}
              alt={product?.color}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <TextField
              label="Номер телефона для связи"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              fullWidth
              sx={{ marginBottom: 1, marginTop: "30px" }}
              required
            />
            <div>
              <p>
                <strong>Категория:</strong> {product?.category}
              </p>
              <p>
                <strong>Цвет:</strong> {product?.color}
              </p>
            </div>
          </div>

          {blocks.map((block) => (
            <div
              key={block.id}
              className="measurement-block"
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <TextField
                label="Ширина (мм)"
                type="number"
                value={block.width}
                onChange={(e) =>
                  handleChange(block.id, "width", e.target.value)
                }
                sx={{ flex: 1 }}
              />
              <TextField
                label="Длина (мм)"
                type="number"
                value={block.length}
                onChange={(e) =>
                  handleChange(block.id, "length", e.target.value)
                }
                sx={{ flex: 1 }}
              />
              {blocks.length > 1 && (
                <IconButton
                  onClick={() => handleRemoveBlock(block.id)}
                  color="error"
                >
                  <DeleteIcon />
                </IconButton>
              )}
            </div>
          ))}

          <Button
            startIcon={<AddIcon />}
            onClick={handleAddBlock}
            sx={{
              marginBottom: 2,
              color: "#649d2a",
            }}
          >
            Добавить блок
          </Button>

          <div className="modal-actions">
            <Button
              variant="contained"
              onClick={handleCalculate}
              disabled={isLoading}
              sx={{
                marginRight: "10px",
                backgroundColor: "#649d2a",
                "&:hover": {
                  backgroundColor: "#4c7420",
                },
              }}
            >
              {isLoading ? "Отправка..." : "Рассчитать"}
            </Button>
            <Button
              variant="outlined"
              onClick={handleModalClose}
              disabled={isLoading}
            >
              Закрыть
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default CalculateModal;