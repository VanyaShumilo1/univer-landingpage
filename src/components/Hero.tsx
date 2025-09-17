import { DirectionsCar, EmojiEvents, Speed } from "@mui/icons-material";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      id="hero"
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 8, md: 10 },
      }}
    >
      {/* Animated background */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.1,
          background:
            "radial-gradient(circle at 20% 80%, #00ffff 0%, transparent 50%), radial-gradient(circle at 80% 20%, #00ffff 0%, transparent 50%)",
        }}
      />

      <Container
        maxWidth="xl"
        sx={{
          px: { xs: 2, sm: 3, md: 4 },
          mx: "auto",
          width: "100%",
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  mb: 3,
                  background: "linear-gradient(45deg, #ffffff, #00ffff)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                F1 Club
              </Typography>

              <Typography
                variant="h4"
                sx={{
                  mb: 4,
                  color: "text.secondary",
                  fontWeight: 300,
                }}
              >
                Відчуй адреналін справжніх перегонів
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  color: "text.secondary",
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                }}
              >
                Професійні автосимулятори, реалістичні траси та справжні емоції
                гонщика. Приєднуйся до нашого клубу та стань частиною світу
                Формули-1!
              </Typography>

              <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => scrollToSection("booking")}
                  sx={{
                    fontSize: "1.1rem",
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Забронювати сесію
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  onClick={() => scrollToSection("about")}
                  sx={{
                    fontSize: "1.1rem",
                    px: 4,
                    py: 1.5,
                    borderColor: "primary.main",
                    color: "primary.main",
                    "&:hover": {
                      borderColor: "primary.light",
                      backgroundColor: "rgba(0, 255, 255, 0.1)",
                    },
                  }}
                >
                  Дізнатись більше
                </Button>
              </Box>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 3,
                  mt: { xs: 4, md: 0 },
                }}
              >
                {[
                  {
                    icon: <DirectionsCar />,
                    title: "Професійні симулятори",
                    description:
                      "Найсучасніше обладнання з реалістичною фізикою",
                  },
                  {
                    icon: <Speed />,
                    title: "Справжні треки",
                    description:
                      "Усі офіційні траси Формули-1 у високій деталізації",
                  },
                  {
                    icon: <EmojiEvents />,
                    title: "Турніри та змагання",
                    description:
                      "Регулярні чемпіонати з призами для переможців",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        p: 3,
                        backgroundColor: "rgba(26, 26, 26, 0.6)",
                        borderRadius: 2,
                        border: "1px solid rgba(0, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Box
                        sx={{
                          color: "primary.main",
                          fontSize: "2rem",
                        }}
                      >
                        {feature.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ mb: 0.5 }}>
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {feature.description}
                        </Typography>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
