import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface BookingData {
  id: string;
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  duration: number;
  simulator: string;
  totalPrice: number;
}

const Booking: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: null as Dayjs | null,
    time: null as Dayjs | null,
    duration: 1,
    simulator: "",
  });

  const [bookings, setBookings] = useState<BookingData[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const simulators = [
    { id: "pro-1", name: "Pro Simulator #1", pricePerHour: 250 },
    { id: "pro-2", name: "Pro Simulator #2", pricePerHour: 250 },
    { id: "pro-3", name: "Pro Simulator #3", pricePerHour: 250 },
    { id: "pro-4", name: "Pro Simulator #4", pricePerHour: 250 },
  ];

  const durations = [
    { value: 0.5, label: "30 хвилин" },
    { value: 1, label: "1 година" },
    { value: 1.5, label: "1,5 години" },
    { value: 2, label: "2 години" },
    { value: 3, label: "3 години" },
  ];

  useEffect(() => {
    const savedBookings = localStorage.getItem("f1club-bookings");
    if (savedBookings) {
      setBookings(JSON.parse(savedBookings));
    }
  }, []);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = "Ім'я обов'язкове";
    if (!formData.phone.trim()) newErrors.phone = "Телефон обов'язковий";
    if (!formData.email.trim()) newErrors.email = "Email обов'язковий";
    if (!formData.date) newErrors.date = "Дата обов'язкова";
    if (!formData.time) newErrors.time = "Час обов'язковий";
    if (!formData.simulator) newErrors.simulator = "Оберіть симулятор";

    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Невірний формат email";
    }

    if (formData.phone && !/^\+?[\d\s\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = "Невірний формат телефону";
    }

    // Check if time slot is available
    if (formData.date && formData.time && formData.simulator) {
      const isBooked = bookings.some(
        (booking) =>
          booking.simulator === formData.simulator &&
          booking.date === formData.date?.format("YYYY-MM-DD") &&
          booking.time === formData.time?.format("HH:mm")
      );

      if (isBooked) {
        newErrors.time = "Цей час вже заброньований";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculatePrice = () => {
    const selectedSimulator = simulators.find(
      (s) => s.id === formData.simulator
    );
    if (!selectedSimulator) return 0;
    return selectedSimulator.pricePerHour * formData.duration;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    const newBooking: BookingData = {
      id: Date.now().toString(),
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      date: formData.date!.format("YYYY-MM-DD"),
      time: formData.time!.format("HH:mm"),
      duration: formData.duration,
      simulator: formData.simulator,
      totalPrice: calculatePrice(),
    };

    const updatedBookings = [...bookings, newBooking];
    setBookings(updatedBookings);
    localStorage.setItem("f1club-bookings", JSON.stringify(updatedBookings));

    // Reset form
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: null,
      time: null,
      duration: 1,
      simulator: "",
    });

    setShowSuccess(true);
  };

  return (
    <Box
      id="booking"
      sx={{
        py: { xs: 8, md: 12 },
        background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
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
            Бронювання сесії
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
            Забронюйте свій час на симуляторі та відчуйте адреналін гонки
          </Typography>
        </motion.div>

        <Grid container spacing={6} sx={{ alignItems: "stretch" }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  p: 3,
                  height: "100%",
                }}
              >
                <CardContent
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 4, color: "primary.main" }}
                  >
                    Форма бронювання
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Ім'я"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          error={!!errors.name}
                          helperText={errors.name}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TextField
                          fullWidth
                          label="Телефон"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          error={!!errors.phone}
                          helperText={errors.phone}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <TextField
                          fullWidth
                          label="Email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          error={!!errors.email}
                          helperText={errors.email}
                          required
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <DatePicker
                          label="Дата"
                          value={formData.date}
                          onChange={(newValue) =>
                            setFormData({ ...formData, date: newValue })
                          }
                          minDate={dayjs()}
                          maxDate={dayjs().add(30, "days")}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              error: !!errors.date,
                              helperText: errors.date,
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <TimePicker
                          label="Час"
                          value={formData.time}
                          onChange={(newValue) =>
                            setFormData({ ...formData, time: newValue })
                          }
                          minTime={dayjs().hour(10).minute(0)}
                          maxTime={dayjs().hour(22).minute(0)}
                          slotProps={{
                            textField: {
                              fullWidth: true,
                              error: !!errors.time,
                              helperText: errors.time,
                            },
                          }}
                        />
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth error={!!errors.simulator}>
                          <InputLabel>Симулятор</InputLabel>
                          <Select
                            value={formData.simulator}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                simulator: e.target.value,
                              })
                            }
                            label="Симулятор"
                          >
                            {simulators.map((sim) => (
                              <MenuItem key={sim.id} value={sim.id}>
                                {sim.name} - {sim.pricePerHour} грн/год
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12, sm: 6 }}>
                        <FormControl fullWidth>
                          <InputLabel>Тривалість</InputLabel>
                          <Select
                            value={formData.duration}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                duration: e.target.value as number,
                              })
                            }
                            label="Тривалість"
                          >
                            {durations.map((duration) => (
                              <MenuItem
                                key={duration.value}
                                value={duration.value}
                              >
                                {duration.label}
                              </MenuItem>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>

                      <Grid size={{ xs: 12 }}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          sx={{ py: 1.5, fontSize: "1.1rem" }}
                        >
                          Забронювати ({calculatePrice()} грн)
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 4 }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  gap: 2,
                }}
              >
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    p: 3,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "245px",
                  }}
                >
                  <CardContent
                    sx={{ flex: 1, display: "flex", flexDirection: "column" }}
                  >
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.main" }}
                    >
                      Ваші бронювання
                    </Typography>

                    {bookings.length === 0 ? (
                      <Typography color="text.secondary">
                        Поки що немає бронювань
                      </Typography>
                    ) : (
                      <Box
                        sx={{
                          flex: 1,
                          overflowY: "scroll",
                          maxHeight: "110px",
                          pr: 1,
                          "&::-webkit-scrollbar": {
                            width: "8px",
                          },
                          "&::-webkit-scrollbar-track": {
                            background: "rgba(0,0,0,0.1)",
                            borderRadius: "10px",
                          },
                          "&::-webkit-scrollbar-thumb": {
                            background: "rgba(0, 255, 255, 0.3)",
                            borderRadius: "10px",
                          },
                          "&::-webkit-scrollbar-thumb:hover": {
                            background: "rgba(0, 255, 255, 0.5)",
                          },
                        }}
                      >
                        {bookings.slice(-10).map((booking) => (
                          <Box
                            key={booking.id}
                            sx={{
                              p: 1,
                              mb: 1,
                              backgroundColor: "rgba(0, 255, 255, 0.1)",
                              borderRadius: 1,
                              border: "1px solid rgba(0, 255, 255, 0.2)",
                            }}
                          >
                            <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                              {booking.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {booking.date} о {booking.time}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {booking.duration}г - {booking.totalPrice} грн
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    )}
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    backgroundColor: "rgba(0, 255, 255, 0.1)",
                    p: 3,
                    maxHeight: "265px",
                    overflowY: "auto",
                    "&::-webkit-scrollbar": {
                      width: "8px",
                    },
                    "&::-webkit-scrollbar-track": {
                      background: "rgba(0,0,0,0.1)",
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb": {
                      background: "rgba(0, 255, 255, 0.3)",
                      borderRadius: "10px",
                    },
                    "&::-webkit-scrollbar-thumb:hover": {
                      background: "rgba(0, 255, 255, 0.5)",
                    },
                  }}
                >
                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ mb: 2, color: "primary.main" }}
                    >
                      Важлива інформація
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      • Мінімальне бронювання - 30 хвилин
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      • Скасування за 2 години до початку
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      • Оплата на місці або онлайн
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      • Знижка 10% при бронюванні від 3 годин
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
          </Grid>
        </Grid>
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
          Бронювання успішно створено! Ми зв'яжемося з вами найближчим часом.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Booking;
