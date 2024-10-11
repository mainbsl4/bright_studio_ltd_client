/* eslint-disable react/no-unescaped-entities */
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Icon } from "@iconify/react";

export default function WHYCHOOSEUS() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="md:container md:mx-auto mt-10">
      <div className="lg:px-12 flex justify-center items-center flex-col">
        <p>
        BEST IMAGE EDITING SERVICE PROVIDER COMPANY WITH AN EXCELLENT TRACK RECORD
        </p>
        <h3>WHY CHOOSE US</h3>
        <p>We are experienced in providing all kinds of image editing services like Clipping Path, Background Removal, Image Enhancement, Image Masking, Image Manipulation, Photo Retouching, Neck Joint, Color Correction, Shadow Creation, etc. From Bright Studio we always give priority to our clients. Our goal is to help our clients through our services. Our services come with the following things.</p>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4 mt-5">
        <div>
          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
           
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{ flexShrink: 0 }}>
              Reasonable Cost
              </Typography>
          
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Our exclusive services come with very little cost. If you think image outsourcing is expensive then try us you will be amazed by our pricing. Get your quote from us today.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              Exclusive Discount On 1st Order
              </Typography>
            
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We have a 24/5 Day customer support team who we are always ready for your query. Our instant chat support and voice call will give you 100% satisfaction with our service
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              3 Step Quality Control
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We have plenty of experienced designers who will implement all your idea into the photo. To give the best outcome we have 3 step quality control. We will ensure each and every need of yours in the image.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              Easy Permanent System
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We let everything on to our clients regarding payments. You can pay whatever way you can. We are open to everything. You can pay via PayPal, Bank transfer, Check, etc. We accept Weekly, Bi-Weekly and Monthly Payments. You can choose whatever option is best for you.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div>
          <Accordion
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              100% Money Back Guaranteed
              </Typography>
           
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We believe in quality work. Our job is to make you satisfied. You don't need to pay a cent until you're fully satisfied. So we will ensure the money back guarantee.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel2bh-content"
              id="panel2bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              Free Trial Service
              </Typography>
             
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              We have free trial services which will help you to judge our work quality before start working with us. It will also help you to make the right decision.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel3bh-content"
              id="panel3bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              Bulk Amount Discountee
              </Typography>
              
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              : If you have a bulk amount of files and you’re worried about the cost we are here for you. We will offer exclusive package pricing for bulk images. Finding difficult to believe get your quote from us today.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          >
            <AccordionSummary
              expandIcon={<Icon icon="uiw:down" />}
              aria-controls="panel4bh-content"
              id="panel4bh-header"
              sx={{
                background:"#377BBF",
                color:"white",
              }}
            >
              <Typography sx={{  flexShrink: 0 }}>
              Satisfaction Guaranteed
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Client satisfaction is the only thing we care about. We always work until our clients are happy. We believe in quality, not in quantity.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
