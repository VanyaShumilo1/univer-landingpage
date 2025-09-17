import {
  Email,
  Facebook,
  Instagram,
  Phone,
  Send,
  Telegram,
} from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const contactInfo = [
    {
      icon: <Phone />,
      title: "Телефон",
      value: "+38 (050) 238-34-26",
      action: () => window.open("tel:+380502383426"),
    },
    {
      icon: <Email />,
      title: "Email",
      value: "f1clubuzhhorod@gmail.com",
      action: () => window.open("mailto:f1clubuzhhorod@gmail.com"),
    },
    {
      icon: <Telegram />,
      title: "Telegram",
      value: "@f1club_ua",
      action: () => window.open("https://t.me/f1club_ua"),
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram />,
      name: "Instagram",
      url: "https://instagram.com/f1club_ua",
      color: "#E4405F",
    },
    {
      icon: <Facebook />,
      name: "Facebook",
      url: "https://facebook.com/f1club.ua",
      color: "#1877F2",
    },
    {
      icon: <Telegram />,
      name: "Telegram",
      url: "https://t.me/f1club_ua",
      color: "#0088CC",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simulate form submission
    console.log("Form submitted:", formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setShowSuccess(true);
  };

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: e.target.value,
      }));
    };

  return (
    <Box
      id="contact"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
          width: "100%",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            component="h2"
            align="center"
            sx={{
              mb: 2,
              color: "white",
            }}
          >
            Контакти
          </Typography>

          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 8,
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Зв'яжіться з нами для бронювання або отримання додаткової інформації
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card sx={{ backgroundColor: "background.paper", p: 3 }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    sx={{ mb: 4, color: "primary.main" }}
                  >
                    Напишіть нам
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Ім'я"
                          value={formData.name}
                          onChange={handleInputChange("name")}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange("email")}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Тема"
                          value={formData.subject}
                          onChange={handleInputChange("subject")}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Повідомлення"
                          multiline
                          rows={6}
                          value={formData.message}
                          onChange={handleInputChange("message")}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          startIcon={<Send />}
                          sx={{
                            py: 1.5,
                            px: 4,
                            fontSize: "1.1rem",
                          }}
                        >
                          Надіслати повідомлення
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Typography variant="h4" sx={{ mb: 4, color: "white" }}>
                Зв'яжіться з нами
              </Typography>

              <Box
                sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 6 }}
              >
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      sx={{
                        backgroundColor: "rgba(26, 26, 26, 0.8)",
                        border: "1px solid rgba(0, 255, 255, 0.2)",
                        cursor: "pointer",
                        "&:hover": {
                          borderColor: "primary.main",
                          transform: "translateX(8px)",
                          transition: "all 0.3s ease",
                        },
                      }}
                      onClick={contact.action}
                    >
                      <CardContent sx={{ p: 3 }}>
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 2 }}
                        >
                          <Box
                            sx={{
                              color: "primary.main",
                              fontSize: "1.5rem",
                            }}
                          >
                            {contact.icon}
                          </Box>
                          <Box>
                            <Typography variant="h6" sx={{ mb: 0.5 }}>
                              {contact.title}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              {contact.value}
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </Box>

              {/* Social Media */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Typography variant="h5" sx={{ mb: 3, color: "white" }}>
                  Соціальні мережі
                </Typography>

                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <IconButton
                        onClick={() => window.open(social.url, "_blank")}
                        sx={{
                          backgroundColor: "rgba(26, 26, 26, 0.8)",
                          border: "1px solid rgba(0, 255, 255, 0.2)",
                          color: "white",
                          width: 60,
                          height: 60,
                          "&:hover": {
                            backgroundColor: social.color,
                            borderColor: social.color,
                            transform: "scale(1.1)",
                            transition: "all 0.3s ease",
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                    </motion.div>
                  ))}
                </Box>
              </motion.div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    mt: 4,
                    backgroundColor: "rgba(0, 255, 255, 0.1)",
                    border: "1px solid rgba(0, 255, 255, 0.3)",
                  }}
                >
                  <CardContent sx={{ p: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.main" }}
                    >
                      Швидке бронювання
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      Телефонуйте нам для швидкого бронювання або з'ясування
                      наявності вільних місць
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Працюємо щодня з 11:00 до 01:00
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              pt: 4,
              borderTop: "1px solid rgba(0, 255, 255, 0.2)",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" sx={{ mb: 2, color: "primary.main" }}>
              F1 Club
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
              Відчуй адреналін справжніх перегонів
            </Typography>
            <Typography variant="body2" color="text.secondary">
              © 2024 F1 Club. Всі права захищені.
            </Typography>
          </Box>
        </motion.div>
      </Container>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert
          onClose={() => setShowSuccess(false)}
          severity="success"
          sx={{ width: "100%" }}
        >
          Ваше повідомлення надіслано! Ми зв'яжемося з вами найближчим часом.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;
