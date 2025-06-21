const axios = require('axios');
const onBoardingSaludMental = require('../models/onBoardingSaludMental'); // Importar el modelo específico
const entrevistaSaludMental = require('../models/entrevistaSaludMental'); // Importar el modelo
const seguimientoSaludMental = require('../models/seguimientoSaludMental'); // Importar el modelo
const oxiOnBoarding = require('../models/oxiOnBoarding'); // Importar el modelo
const oxiTamizaje = require('../models/oxiTamizaje'); // Importar el modelo
const TranscripcionEntrevista = require('../models/transcripcionLlamadaSaludMental'); // asegúrate de importar el modelo
const TranscripcionOnBoarding= require('../models/TranscripcionOnBoardingSaludMental');
const { OpenAI } = require("openai");


exports.onBoardingSaludMental = async (req, res) => {
    try {
        const { numero } = req.body;

        axios.post(
            "https://api.vapi.ai/call/phone",
            {
                assistantId: "f94386b6-9218-4386-9a54-5ccad8e0c1ea",
                customer: { number: numero },
                phoneNumberId: "7589b5b5-f1f3-42e6-b287-7da895d6a540"
            },
            {
                headers: {
                    Authorization: "Bearer d9424df4-37c9-4186-9b97-4c81be169786",
                    "Content-Type": "application/json"
                }
            }
        ).then(response => {
            console.log("✅ Llamada iniciada correctamente:", response.data);
            res.status(200).json({ message: "Llamada en proceso, el usuario será contactado." });

        }).catch(error => {
            console.error("❌ Error al iniciar la llamada:", error.response?.data || error.message);
        });

    } catch (error) {
        console.error("❌ Error en onBoardingSaludMental:", error.message);
        res.status(500).json({ error: "Error al procesar la solicitud de llamada" });
    }
};

exports.entrevistaSaludMental = async (req, res) => {
  try {
      const { numero } = req.body;

      axios.post(
          "https://api.vapi.ai/call/phone",
          {
              assistantId: "f9f621a1-9fbe-4a94-ae60-b5699a8fa34e",
              customer: { number: numero },
              phoneNumberId: "7589b5b5-f1f3-42e6-b287-7da895d6a540"
          },
          {
              headers: {
                  Authorization: "Bearer d9424df4-37c9-4186-9b97-4c81be169786",
                  "Content-Type": "application/json"
              }
          }
      ).then(response => {
          console.log("✅ Llamada iniciada correctamente:", response.data);
          res.status(200).json({ message: "Llamada en proceso, el usuario será contactado." });

      }).catch(error => {
          console.error("❌ Error al iniciar la llamada:", error.response?.data || error.message);
      });

  } catch (error) {
      console.error("❌ Error en entrevistaSaludMental:", error.message);
      res.status(500).json({ error: "Error al procesar la solicitud de llamada" });
  }
};

exports.seguimientoSaludMental = async (req, res) => {
  try {
      const { numero } = req.body;

      axios.post(
          "https://api.vapi.ai/call/phone",
          {
              assistantId: "f5d602ec-c5a7-4168-a19d-18fd10a8ee52",
              customer: { number: numero },
              phoneNumberId: "7589b5b5-f1f3-42e6-b287-7da895d6a540"
          },
          {
              headers: {
                  Authorization: "Bearer d9424df4-37c9-4186-9b97-4c81be169786",
                  "Content-Type": "application/json"
              }
          }
      ).then(response => {
          console.log("✅ Llamada iniciada correctamente:", response.data);
          res.status(200).json({ message: "Llamada en proceso, el usuario será contactado." });

      }).catch(error => {
          console.error("❌ Error al iniciar la llamada:", error.response?.data || error.message);
      });

  } catch (error) {
      console.error("❌ Error en seguimientoSaludMental:", error.message);
      res.status(500).json({ error: "Error al procesar la solicitud de llamada" });
  }
};

exports.oxiOnBoarding = async (req, res) => {
  try {
      const { numero } = req.body;

      axios.post(
          "https://api.vapi.ai/call/phone",
          {
              assistantId: "c7859f93-824e-4e4b-9e64-ad97426df0e2", // Reemplaza por el ID real
              customer: { number: numero },
              phoneNumberId: "7589b5b5-f1f3-42e6-b287-7da895d6a540"
          },
          {
              headers: {
                  Authorization: "Bearer d9424df4-37c9-4186-9b97-4c81be169786",
                  "Content-Type": "application/json"
              }
          }
      ).then(response => {
          console.log("✅ Llamada Oxi OnBoarding iniciada correctamente:", response.data);
          res.status(200).json({ message: "Llamada Oxi OnBoarding en proceso, el usuario será contactado." });

      }).catch(error => {
          console.error("❌ Error al iniciar la llamada Oxi OnBoarding:", error.response?.data || error.message);
          res.status(500).json({ error: "Error al iniciar la llamada Oxi OnBoarding" });
      });

  } catch (error) {
      console.error("❌ Error en oxiOnBoarding:", error.message);
      res.status(500).json({ error: "Error al procesar la solicitud de llamada Oxi OnBoarding" });
  }
};

exports.oxiTamizaje = async (req, res) => {
  try {
      const { numero } = req.body;

      axios.post(
          "https://api.vapi.ai/call/phone",
          {
              assistantId: "dc56652e-79da-4a92-a6f6-9d666344190f", // Reemplaza por el ID real
              customer: { number: numero },
              phoneNumberId: "7589b5b5-f1f3-42e6-b287-7da895d6a540"
          },
          {
              headers: {
                  Authorization: "Bearer d9424df4-37c9-4186-9b97-4c81be169786",
                  "Content-Type": "application/json"
              }
          }
      ).then(response => {
          console.log("✅ Llamada Oxi Tamizaje iniciada correctamente:", response.data);
          res.status(200).json({ message: "Llamada Oxi Tamizaje en proceso, el usuario será contactado." });

      }).catch(error => {
          console.error("❌ Error al iniciar la llamada Oxi Tamizaje:", error.response?.data || error.message);
          res.status(500).json({ error: "Error al iniciar la llamada Oxi Tamizaje" });
      });

  } catch (error) {
      console.error("❌ Error en oxiTamizaje:", error.message);
      res.status(500).json({ error: "Error al procesar la solicitud de llamada Oxi Tamizaje" });
  }
};


exports.responseOnBoardingSaludMental = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report') {
      const summaryRaw = message.analysis?.summary;
      const transcript = message.artifact?.transcript;

      console.log("🧠 Summary recibido:", summaryRaw ?? "No disponible");
      console.log("🗣️ Transcripción:", transcript ?? "No disponible");

      if (!summaryRaw) {
        return res.status(400).json({ error: "No se encontró el campo 'summary'." });
      }

      // Limpieza del summary
      let parsedData;
      try {
        const cleanedSummary = typeof summaryRaw === 'string'
          ? summaryRaw.replace(/```json|```/g, '').trim()
          : summaryRaw;

        parsedData = typeof cleanedSummary === 'string'
          ? JSON.parse(cleanedSummary)
          : cleanedSummary;

        console.log("✅ Summary parseado como JSON:", parsedData);
      } catch (err) {
        console.error("❌ Error al parsear el summary:", err.message);
        return res.status(400).json({ error: "El campo 'summary' no contiene un JSON válido." });
      }

      // Guardar el documento principal
      const newCall = new onBoardingSaludMental({
        NombreCompleto: parsedData.NombreCompleto,
        Telefono: parsedData.Telefono,
        DocumentoIdentidad: {
          Tipo: parsedData.DocumentoIdentidad?.Tipo,
          Numero: parsedData.DocumentoIdentidad?.Numero,
        },
        FechaEntrevista: parsedData.FechaEntrevista,
      });

      const savedCall = await newCall.save();

      console.log("✅ Onboarding guardado con ID:", savedCall._id);

      // Guardar la transcripción si existe
      if (transcript) {
        const nuevaTranscripcion = new TranscripcionOnBoarding({
          onboardingId: savedCall._id,
          texto: transcript,
        });

        await nuevaTranscripcion.save();
        console.log("📝 Transcripción guardada correctamente.");
      } else {
        console.log("⚠️ No se encontró transcripción para guardar.");
      }

      res.status(200).json({ message: "Datos y transcripción guardados correctamente." });
    } else {
      console.log("⚠️ Tipo de mensaje no procesado:", message?.type);
      res.status(200).json({ message: "Tipo de mensaje no procesado." });
    }
  } catch (error) {
    console.error("❌ Error en responseOnBoardingSaludMental:", error.message);
    res.status(500).json({ error: "Error al procesar los datos" });
  }
};

exports.responseOxiAsistencia = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report') {
      const summaryRaw = message.analysis?.summary;

      console.log("");
      console.log("Esperando resumen");
      console.log("📞 Resumen de Asistencia (sin parsear):", summaryRaw ?? "No disponible");

      res.status(200).json({ message: "Resumen recibido correctamente en oxiAsistencia" });
    } else {
      console.log("⚠️ Tipo de mensaje no reconocido o no es un end-of-call-report");
      res.status(400).json({ error: "Tipo de mensaje no válido o sin summary" });
    }
  } catch (error) {
    console.error("❌ Error en handleVapiResponseOxiAsistencia:", error.message);
    res.status(500).json({ error: "Error interno al procesar el resumen" });
  }
};




exports.responseEntrevistaSaludMental = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report') {
      

      if (!message.analysis) {
        console.warn("⚠️ El campo 'analysis' no está presente en el mensaje.");
      } else {
        console.dir(message.analysis, { depth: null });
      }

      const summary = message.analysis?.summary;

      console.log("📨 Resumen del mensaje recibido:");
      console.log("➡️ Tipo:", message?.type);
      console.log("🧠 Summary:", summary ?? "No disponible");
      console.log("📊 StructuredData:", message?.analysis?.structuredData ?? "No disponible");

      if (summary) {
        let parsedData;

        try {
          const cleanedSummary = typeof summary === 'string'
            ? summary.replace(/```json|```/g, '').trim()
            : summary;

          parsedData = typeof cleanedSummary === 'string'
            ? JSON.parse(cleanedSummary)
            : cleanedSummary;

          console.log("📋 Datos parseados desde summary:", parsedData);
        } catch (err) {
          console.warn("⚠️ El campo 'summary' no es un JSON válido:", err.message);
          return res.status(400).json({ error: "El campo 'summary' no contiene un JSON válido." });
        }

        // Guardar el documento principal
        const newEntry = new entrevistaSaludMental({
          TamizajeInicial: parsedData.TamizajeInicial
        });

        const savedEntry = await newEntry.save();

        console.log("✅ Datos guardados correctamente en la colección EntrevistaSaludMental");

        // Guardar la transcripción si existe
        const transcript = message.artifact?.transcript;

        if (transcript) {
          const nuevaTranscripcion = new TranscripcionEntrevista({
            entrevistaId: savedEntry._id,
            texto: transcript,
            fecha: new Date()
          });

          await nuevaTranscripcion.save();
          console.log("📝 Transcripción guardada y asociada a entrevista:", savedEntry._id);
        } else {
          console.warn("⚠️ No se encontró transcripción en el mensaje.");
        }

        res.status(200).json({ message: "Datos y transcripción procesados correctamente" });
      } else {
        console.log("⚠️ Mensaje válido pero sin summary. Se omite guardado.");
        res.status(200).json({ message: "Mensaje recibido, pero sin summary. No se guardó nada." });
      }
    } else {
      console.log("⚠️ Mensaje no es del tipo 'end-of-call-report'.");
      res.status(200).json({ message: "Mensaje no procesado (tipo diferente)." });
    }
  } catch (error) {
    console.error("❌ Error en responseEntrevistaSaludMental:", error.message);
    res.status(500).json({ error: "Error al procesar los datos" });
  }
};





exports.responseSeguimientoSaludMental = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report' && message?.analysis?.structuredData) {
      const structuredData = message.analysis.structuredData;
      console.log("📋 Datos recibidos en /api/responseSeguimientoSaludMental:", structuredData);

      // Crear un nuevo documento en la colección de MongoDB
      const newEntry = new seguimientoSaludMental({
        atencionUrgenciaSummary: structuredData.atencionUrgenciaSummary,
      });

      // Guardar en la base de datos
      await newEntry.save();

      console.log("✅ Datos guardados correctamente en la colección SeguimientoSaludMental");
      res.status(200).json({ message: "Datos procesados y guardados correctamente en MongoDB" });
    } else {
      console.log("⚠️ No se encontró structuredData en el mensaje recibido.");
      res.status(400).json({ error: "No se encontró structuredData en el mensaje recibido." });
    }
  } catch (error) {
    console.error("❌ Error en responseSeguimientoSaludMental:", error.message);
    res.status(500).json({ error: "Error al procesar los datos" });
  }
};

exports.responseOxiOnBoarding = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report' && message?.analysis?.structuredData) {
      const structuredData = message.analysis.structuredData;
      console.log("📋 Datos recibidos en /api/responseOxiOnBoarding:", structuredData);

      const newCall = new oxiOnBoarding({
        onboardingInicialOxyayuda: structuredData.onboardingInicialOxyayuda
      });

      await newCall.save();

      console.log("✅ Datos guardados correctamente en la colección oxiOnBoarding");
      res.status(200).json({ message: "Datos procesados y guardados correctamente en MongoDB" });
    } else {
      console.log("⚠️ No se encontró structuredData en el mensaje recibido.");
      res.status(400).json({ error: "No se encontró structuredData en el mensaje recibido." });
    }
  } catch (error) {
    console.error("❌ Error en responseOxiOnBoarding:", error.message);
    res.status(500).json({ error: "Error al procesar los datos" });
  }
};

exports.responseOxiTamizaje = async (req, res) => {
  try {
    const { message } = req.body;

    if (message?.type === 'end-of-call-report' && message?.analysis?.structuredData) {
      const structuredData = message.analysis.structuredData;
      console.log("📋 Datos recibidos en /api/responseOxiTamizaje:", structuredData);

      const newTamizaje = new oxiTamizaje({
        tamizajeOxyayuda: structuredData.tamizajeOxyayuda
      });

      await newTamizaje.save();

      console.log("✅ Datos guardados correctamente en la colección oxiTamizaje");
      res.status(200).json({ message: "Datos procesados y guardados correctamente en MongoDB" });
    } else {
      console.log("⚠️ No se encontró structuredData en el mensaje recibido.");
      res.status(400).json({ error: "No se encontró structuredData en el mensaje recibido." });
    }
  } catch (error) {
    console.error("❌ Error en responseOxiTamizaje:", error.message);
    res.status(500).json({ error: "Error al procesar los datos" });
  }
};

exports.consultOnBoardingSaludMental = async (req, res) => {
  try {
    // Consultar todas las llamadas de la colección onBoardingSaludMental
    const calls = await onBoardingSaludMental.find();

    res.status(200).json(calls);
  } catch (error) {
    console.error("❌ Error en consultOnBoardingSaludMental:", error.message);
    res.status(500).json({ error: "Error al consultar las llamadas de onBoardingSaludMental" });
  }
};

exports.consultEntrevistaSaludMental = async (req, res) => {
  try {
    // Consultar todas las entradas de la colección EntrevistaSaludMental
    const entries = await entrevistaSaludMental.find();

    res.status(200).json(entries);
  } catch (error) {
    console.error("❌ Error en consultEntrevistaSaludMental:", error.message);
    res.status(500).json({ error: "Error al consultar las entradas de EntrevistaSaludMental" });
  }
};

exports.consultSeguimientoSaludMental = async (req, res) => {
  try {
    // Consultar todas las entradas de la colección SeguimientoSaludMental
    const entries = await seguimientoSaludMental.find();

    res.status(200).json(entries);
  } catch (error) {
    console.error("❌ Error en consultSeguimientoSaludMental:", error.message);
    res.status(500).json({ error: "Error al consultar las entradas de SeguimientoSaludMental" });
  }
};

exports.consultOxiOnBoarding = async (req, res) => {
  try {
    // Consultar todas las llamadas de la colección oxiOnBoarding
    const calls = await oxiOnBoarding.find();

    res.status(200).json(calls);
  } catch (error) {
    console.error("❌ Error en consultOxiOnBoarding:", error.message);
    res.status(500).json({ error: "Error al consultar los datos de Oxi OnBoarding" });
  }
};

exports.consultOxiTamizaje = async (req, res) => {
  try {
    // Consultar todas las llamadas de la colección oxiTamizaje
    const tamizajes = await oxiTamizaje.find();

    res.status(200).json(tamizajes);
  } catch (error) {
    console.error("❌ Error en consultOxiTamizaje:", error.message);
    res.status(500).json({ error: "Error al consultar los datos de Oxi Tamizaje" });
  }
};


exports.whatsappBienvenida = async (req, res) => {
  try {
    const { numero } = req.body;
    
    axios.post(
      "https://graph.facebook.com/v22.0/587113451151885/messages",
      {
        messaging_product: "whatsapp",
        to: numero,
        type: "template",
        template: {
          name: "notificacion_nuevo_paciente_new",
          language: {
            code: "en"
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: "https://adresfosyga.co/wp-content/uploads/2020/05/Nueva-EPS-Logo.png"
                  }
                }
              ]
            },
            {
              type: "body",
              parameters: [
                {
                  type: "text",
                  text: "https://mozart-nuevo-fronted.vercel.app/"
                },
                {
                  type: "text",
                  text: "pacientenuevaeps"
                },
                {
                  type: "text",
                  text: "12345"
                }
              ]
            }
          ]
        }
      },
      {
        headers: {
          Authorization: "Bearer EAAaTwNpMCk0BOZCdHI0f18pn7lTw8DQ8G68cHEdeKr29pW92bZA4SpQJ7AYhTt9j9kzSAU6Ld67rJqFoR7zt0bRgfdZCFDXhjRXp2UZCG2dwToSrTR9uU4FOZCrTVuAeTwsTZCmIfxvOGZARyoR8ajqn8X7ZCCXa7awgBDiauyZARx2nHCqlIIQa8udZB6aR76Of4H7wZDZD",
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      console.log("✅ Mensaje WhatsApp enviado correctamente:", response.data);
      res.status(200).json({ message: "Mensaje de WhatsApp enviado correctamente." });
    }).catch(error => {
      console.error("❌ Error al enviar mensaje de WhatsApp:", error.response?.data || error.message);
      res.status(500).json({ error: "Error al enviar mensaje de WhatsApp" });
    });
  } catch (error) {
    console.error("❌ Error en whatsappBienvenida:", error.message);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

// Función para enviar mensaje de WhatsApp para medicamento
exports.whatsappMedicamento = async (req, res) => {
  try {
    const { numero } = req.body;
    
    const datosQuemados = {
      nombrePaciente: "Paciente 1",
      medicamento: "Clonazepam",
      concentracion: "2mg",
      horaTomaFormateada: "8:00 AM",
      dosis: "1 tableta",
      presentacion: "Tabletas",
      viaAdministracion: "Oral",
      indicaciones: "Tomar con agua"
    };

    axios.post(
      "https://graph.facebook.com/v22.0/587113451151885/messages",
      {
        messaging_product: "whatsapp",
        to: numero,
        type: "template",
        template: {
          name: "nuevo_medicamento_new",
          language: {
            code: "en"
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: "https://adresfosyga.co/wp-content/uploads/2020/05/Nueva-EPS-Logo.png"
                  }
                }
              ]
            },
            {
              type: "body",
              parameters: Object.entries(datosQuemados).map(([_, value]) => ({
                type: "text",
                text: value
              }))
            }
          ]
        }
      },
      {
        headers: {
          Authorization: "Bearer EAAaTwNpMCk0BOZCdHI0f18pn7lTw8DQ8G68cHEdeKr29pW92bZA4SpQJ7AYhTt9j9kzSAU6Ld67rJqFoR7zt0bRgfdZCFDXhjRXp2UZCG2dwToSrTR9uU4FOZCrTVuAeTwsTZCmIfxvOGZARyoR8ajqn8X7ZCCXa7awgBDiauyZARx2nHCqlIIQa8udZB6aR76Of4H7wZDZD",
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      console.log("✅ Mensaje WhatsApp enviado correctamente:", response.data);
      res.status(200).json({ message: "Mensaje de WhatsApp enviado correctamente." });
    }).catch(error => {
      console.error("❌ Error al enviar mensaje de WhatsApp:", error.response?.data || error.message);
      res.status(500).json({ error: "Error al enviar mensaje de WhatsApp" });
    });
  } catch (error) {
    console.error("❌ Error en whatsappMedicamento:", error.message);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};


exports.whatsappCita = async (req, res) => {
  try {
    const { numero } = req.body;
    
    const datosQuemados = {
      Paciente: "Paciente 1",
      fechaCitaFormateada: "9 de Mayo de 2025",
      horaCitaFormateada: "10:30 AM",
      hospital: "Hospital Central"
    };

    axios.post(
      "https://graph.facebook.com/v22.0/587113451151885/messages",
      {
        messaging_product: "whatsapp",
        to: numero,
        type: "template",
        template: {
          name: "notificacion_cita_mozart",
          language: {
            code: "en"
          },
          components: [
            {
              type: "header",
              parameters: [
                {
                  type: "image",
                  image: {
                    link: "https://adresfosyga.co/wp-content/uploads/2020/05/Nueva-EPS-Logo.png"
                  }
                }
              ]
            },
            {
              type: "body",
              parameters: Object.entries(datosQuemados).map(([_, value]) => ({
                type: "text",
                text: value
              }))
            }
          ]
        }
      },
      {
        headers: {
          Authorization: "Bearer EAAaTwNpMCk0BOZCdHI0f18pn7lTw8DQ8G68cHEdeKr29pW92bZA4SpQJ7AYhTt9j9kzSAU6Ld67rJqFoR7zt0bRgfdZCFDXhjRXp2UZCG2dwToSrTR9uU4FOZCrTVuAeTwsTZCmIfxvOGZARyoR8ajqn8X7ZCCXa7awgBDiauyZARx2nHCqlIIQa8udZB6aR76Of4H7wZDZD",
          "Content-Type": "application/json"
        }
      }
    ).then(response => {
      console.log("✅ Mensaje WhatsApp enviado correctamente:", response.data);
      res.status(200).json({ message: "Mensaje de WhatsApp enviado correctamente." });
    }).catch(error => {
      console.error("❌ Error al enviar mensaje de WhatsApp:", error.response?.data || error.message);
      res.status(500).json({ error: "Error al enviar mensaje de WhatsApp" });
    });
  } catch (error) {
    console.error("❌ Error en whatsappCita:", error.message);
    res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};


exports.chatConAsistenteHoteles = async (req, res) => {
  try {
    const { mensaje } = req.body;
    const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

    // Crea un hilo nuevo para cada conversación (puedes mejorar esto para mantener el hilo por usuario)
    const thread = await openai.beta.threads.create();

    // Añade el mensaje del usuario al hilo
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: mensaje,
    });

    // Llama al asistente personalizado
    const run = await openai.beta.threads.runs.create(thread.id, {
      assistant_id: process.env.ASSISTANT_ID,
    });

    // Espera a que termine el run (polling simple)
    let runStatus;
    do {
      runStatus = await openai.beta.threads.runs.retrieve(thread.id, run.id);
      if (runStatus.status !== "completed") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    } while (runStatus.status !== "completed");

    // Obtiene la respuesta del asistente
    const messages = await openai.beta.threads.messages.list(thread.id);
    const respuesta = messages.data
      .filter((msg) => msg.role === "assistant")
      .map((msg) => msg.content.map((c) => c.text.value).join("\n"))
      .join("\n");

    res.json({ respuesta });
  } catch (error) {
    console.error("❌ Error en chatConAsistenteHoteles:", error.message);
    res.status(500).json({ error: "Error al comunicarse con el asistente" });
  }
};
