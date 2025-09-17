import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState } from "react";

import IMG1 from "../assets/entrance.jpg";
import IMG2 from "../assets/photo1.jpg";
import IMG3 from "../assets/photo2.jpg";
import IMG4 from "../assets/photo3.jpg";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  title: string;
}

const Gallery: React.FC = () => {
  const theme = useTheme();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Тут ви можете додати ваші 4 фотографії
  const images: GalleryImage[] = [
    {
      id: 1,
      src: IMG1,
      alt: "F1 Simulator 1",
      title: "Вхід до клубу автосимуляторів",
    },
    {
      id: 2,
      src: IMG2,
      alt: "F1 Simulator 2",
      title: "Бар та зона відпочинку",
    },
    {
      id: 3,
      src: IMG3,
      alt: "F1 Simulator 3",
      title: "Ігрова зона з декількома симуляторами",
    },
    {
      id: 4,
      src: IMG4,
      alt: "F1 Simulator 4",
      title: "Каса та зона очікування",
    },
  ];

  const handleImageClick = (index: number) => {
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handlePrevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + images.length) % images.length);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  return (
    <Box
      id="gallery"
      component="section"
      sx={{
        py: 12,
        backgroundColor: "background.default",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              background: `linear-gradient(45deg, ${theme.palette.primary.main}, #ffffff)`,
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Галерея
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
            Подивіться на наші сучасні симулятори та атмосферу клубу
          </Typography>
        </motion.div>

        <Grid container spacing={3}>
          {images.map((image, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={image.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: 280,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    border: `1px solid rgba(0, 255, 255, 0.2)`,
                    "&:hover": {
                      border: `2px solid ${theme.palette.primary.main}`,
                      boxShadow: `0 8px 25px rgba(0, 255, 255, 0.3)`,
                      transform: "translateY(-5px)",
                    },
                  }}
                  onClick={() => handleImageClick(index)}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={image.src}
                    alt={image.alt}
                    sx={{
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  />
                  <Box sx={{ p: 2 }}>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: "text.primary",
                        fontWeight: 500,
                        fontSize: "0.9rem",
                        textAlign: "center",
                      }}
                    >
                      {image.title}
                    </Typography>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Статистика */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              p: 4,
              backgroundColor: "rgba(0, 255, 255, 0.1)",
              borderRadius: 3,
              border: "1px solid rgba(0, 255, 255, 0.2)",
            }}
          >
            <Grid container spacing={4}>
              <Grid size={{ xs: 6, md: 3 }}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    4
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Симуляторів
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    100+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Задоволених клієнтів
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    50+
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Ігор в каталозі
                  </Typography>
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 3 }}>
                <Box textAlign="center">
                  <Typography
                    variant="h3"
                    sx={{ color: "primary.main", fontWeight: "bold" }}
                  >
                    24/7
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Технічна підтримка
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Container>

      {/* Модальне вікно для повноекранного перегляду */}
      <Modal
        open={selectedImage !== null}
        onClose={handleCloseModal}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            position: "relative",
            maxWidth: "90vw",
            maxHeight: "90vh",
            outline: "none",
          }}
        >
          {selectedImage !== null && (
            <>
              <Box
                component="img"
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                sx={{
                  maxWidth: "100%",
                  maxHeight: "90vh",
                  borderRadius: 2,
                  boxShadow: `0 8px 40px rgba(0, 255, 255, 0.3)`,
                }}
              />

              {/* Кнопка закриття */}
              <IconButton
                onClick={handleCloseModal}
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              {/* Кнопки навігації */}
              <IconButton
                onClick={handlePrevImage}
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  },
                }}
              >
                <ArrowBackIosIcon />
              </IconButton>

              <IconButton
                onClick={handleNextImage}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  color: "white",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.9)",
                  },
                }}
              >
                <ArrowForwardIosIcon />
              </IconButton>

              {/* Назва фото */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(transparent, rgba(0, 0, 0, 0.8))",
                  color: "white",
                  p: 2,
                  borderRadius: "0 0 8px 8px",
                }}
              >
                <Typography variant="h6" align="center">
                  {images[selectedImage].title}
                </Typography>
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default Gallery;
