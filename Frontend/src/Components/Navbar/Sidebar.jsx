import React from "react";
import logo from './../../assets/order.png'
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import { HiMiniPresentationChartBar,HiShoppingBag,HiMiniUserCircle,HiCog6Tooth,HiInbox,HiMiniPower,HiMagnifyingGlass,HiMiniBars3,HiXMark } from "react-icons/hi2";
// import {
//   PresentationChartBarIcon,
//   ShoppingBagIcon,
//   UserCircleIcon,
//   Cog6ToothIcon,
//   InboxIcon,
//   PowerIcon,
// } from "@heroicons/react/24/solid";
import { HiChevronRight,HiChevronDown } from "react-icons/hi";
import { Link } from "react-router-dom";
// import {
//   ChevronRightIcon,
//   ChevronDownIcon,
//   CubeTransparentIcon,
//   MagnifyingGlassIcon,
//   Bars3Icon,
//   XMarkIcon,
// } from "@heroicons/react/24/outline";

export default function Sidebar() {
    const [open, setOpen] = React.useState(0);
    const [openAlert, setOpenAlert] = React.useState(true);
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
   
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };
   
    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);
  return (
    <div className="">
        <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <HiXMark className="h-6 w-6 md:h-8 md:w-8 stroke-2" />
        ) : (
          <HiMiniBars3 className="h-6 w-6 md:h-8 md:w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <div className="mb-2 flex items-center gap-4 p-4">
            <Link to='/'><img
              src={logo}
              alt="brand"
              className="h-8 w-8"
            /></Link>
            
          </div>
          <div className="p-2">
            <Input
              icon={<HiMagnifyingGlass className="h-5 w-5" />}
              label="Search"
            />
          </div>
          <List>
            <Accordion
              open={open === 1}
              icon={
                <HiChevronDown
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 1 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <HiMiniPresentationChartBar className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Dashboard
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <HiChevronRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Analytics
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <HiChevronRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Reporting
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <HiChevronRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Projects
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <Accordion
              open={open === 2}
              icon={
                <HiChevronDown
                  strokeWidth={2.5}
                  className={`mx-auto h-4 w-4 transition-transform ${
                    open === 2 ? "rotate-180" : ""
                  }`}
                />
              }
            >
              <ListItem className="p-0" selected={open === 2}>
                <AccordionHeader
                  onClick={() => handleOpen(2)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <HiShoppingBag className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    E-Commerce
                  </Typography>
                </AccordionHeader>
              </ListItem>
              <AccordionBody className="py-1">
                <List className="p-0">
                  <ListItem>
                    <ListItemPrefix>
                      <HiChevronRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Orders
                  </ListItem>
                  <ListItem>
                    <ListItemPrefix>
                      <HiChevronRight strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Products
                  </ListItem>
                </List>
              </AccordionBody>
            </Accordion>
            <hr className="my-2 border-blue-gray-50" />
            <ListItem>
              <ListItemPrefix>
                <HiInbox className="h-5 w-5" />
              </ListItemPrefix>
              Inbox
              <ListItemSuffix>
                <Chip
                  value="14"
                  size="sm"
                  variant="ghost"
                  color="blue-gray"
                  className="rounded-full"
                />
              </ListItemSuffix>
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <HiMiniUserCircle className="h-5 w-5" />
              </ListItemPrefix>
              Profile
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <HiCog6Tooth className="h-5 w-5" />
              </ListItemPrefix>
              Settings
            </ListItem>
            <ListItem>
              <ListItemPrefix>
                <HiMiniPower className="h-5 w-5" />
              </ListItemPrefix>
              Log Out
            </ListItem>
          </List>
          {/* <Alert
            open={openAlert}
            className="mt-auto"
            onClose={() => setOpenAlert(false)}
          >
            <CubeTransparentIcon className="mb-4 h-12 w-12" />
            <Typography variant="h6" className="mb-1">
              Upgrade to PRO
            </Typography>
            <Typography variant="small" className="font-normal opacity-80">
              Upgrade to Material Tailwind PRO and get even more components,
              plugins, advanced features and premium.
            </Typography>
            <div className="mt-4 flex gap-3">
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium opacity-80"
                onClick={() => setOpenAlert(false)}
              >
                Dismiss
              </Typography>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-medium"
              >
                Upgrade Now
              </Typography>
            </div>
          </Alert> */}
        </Card>
      </Drawer>
    </>
    </div>
  )
}

//example

// export function Sidebar() {
//   const [open, setOpen] = React.useState(0);
//   const [openAlert, setOpenAlert] = React.useState(true);
//   const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
 
//   const handleOpen = (value) => {
//     setOpen(open === value ? 0 : value);
//   };
 
//   const openDrawer = () => setIsDrawerOpen(true);
//   const closeDrawer = () => setIsDrawerOpen(false);
 
//   return (
//     <>
//       <IconButton variant="text" size="lg" onClick={openDrawer}>
//         {isDrawerOpen ? (
//           <HiXMark className="h-8 w-8 stroke-2" />
//         ) : (
//           <HiMiniBars3 className="h-8 w-8 stroke-2" />
//         )}
//       </IconButton>
//       <Drawer open={isDrawerOpen} onClose={closeDrawer}>
//         <Card
//           color="transparent"
//           shadow={false}
//           className="h-[calc(100vh-2rem)] w-full p-4"
//         >
//           <div className="mb-2 flex items-center gap-4 p-4">
//             <img
//               src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
//               alt="brand"
//               className="h-8 w-8"
//             />
//             <Typography variant="h5" color="blue-gray">
//               Sidebar
//             </Typography>
//           </div>
//           <div className="p-2">
//             <Input
//               icon={<HiMagnifyingGlass className="h-5 w-5" />}
//               label="Search"
//             />
//           </div>
//           <List>
//             <Accordion
//               open={open === 1}
//               icon={
//                 <HiChevronDown
//                   strokeWidth={2.5}
//                   className={`mx-auto h-4 w-4 transition-transform ${
//                     open === 1 ? "rotate-180" : ""
//                   }`}
//                 />
//               }
//             >
//               <ListItem className="p-0" selected={open === 1}>
//                 <AccordionHeader
//                   onClick={() => handleOpen(1)}
//                   className="border-b-0 p-3"
//                 >
//                   <ListItemPrefix>
//                     <HiMiniPresentationChartBar className="h-5 w-5" />
//                   </ListItemPrefix>
//                   <Typography color="blue-gray" className="mr-auto font-normal">
//                     Dashboard
//                   </Typography>
//                 </AccordionHeader>
//               </ListItem>
//               <AccordionBody className="py-1">
//                 <List className="p-0">
//                   <ListItem>
//                     <ListItemPrefix>
//                       <HiChevronRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Analytics
//                   </ListItem>
//                   <ListItem>
//                     <ListItemPrefix>
//                       <HiChevronRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Reporting
//                   </ListItem>
//                   <ListItem>
//                     <ListItemPrefix>
//                       <HiChevronRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Projects
//                   </ListItem>
//                 </List>
//               </AccordionBody>
//             </Accordion>
//             <Accordion
//               open={open === 2}
//               icon={
//                 <HiChevronDown
//                   strokeWidth={2.5}
//                   className={`mx-auto h-4 w-4 transition-transform ${
//                     open === 2 ? "rotate-180" : ""
//                   }`}
//                 />
//               }
//             >
//               <ListItem className="p-0" selected={open === 2}>
//                 <AccordionHeader
//                   onClick={() => handleOpen(2)}
//                   className="border-b-0 p-3"
//                 >
//                   <ListItemPrefix>
//                     <HiShoppingBag className="h-5 w-5" />
//                   </ListItemPrefix>
//                   <Typography color="blue-gray" className="mr-auto font-normal">
//                     E-Commerce
//                   </Typography>
//                 </AccordionHeader>
//               </ListItem>
//               <AccordionBody className="py-1">
//                 <List className="p-0">
//                   <ListItem>
//                     <ListItemPrefix>
//                       <HiChevronRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Orders
//                   </ListItem>
//                   <ListItem>
//                     <ListItemPrefix>
//                       <HiChevronRight strokeWidth={3} className="h-3 w-5" />
//                     </ListItemPrefix>
//                     Products
//                   </ListItem>
//                 </List>
//               </AccordionBody>
//             </Accordion>
//             <hr className="my-2 border-blue-gray-50" />
//             <ListItem>
//               <ListItemPrefix>
//                 <HiInbox className="h-5 w-5" />
//               </ListItemPrefix>
//               Inbox
//               <ListItemSuffix>
//                 <Chip
//                   value="14"
//                   size="sm"
//                   variant="ghost"
//                   color="blue-gray"
//                   className="rounded-full"
//                 />
//               </ListItemSuffix>
//             </ListItem>
//             <ListItem>
//               <ListItemPrefix>
//                 <HiMiniUserCircle className="h-5 w-5" />
//               </ListItemPrefix>
//               Profile
//             </ListItem>
//             <ListItem>
//               <ListItemPrefix>
//                 <HiCog6Tooth className="h-5 w-5" />
//               </ListItemPrefix>
//               Settings
//             </ListItem>
//             <ListItem>
//               <ListItemPrefix>
//                 <HiMiniPower className="h-5 w-5" />
//               </ListItemPrefix>
//               Log Out
//             </ListItem>
//           </List>
//           {/* <Alert
//             open={openAlert}
//             className="mt-auto"
//             onClose={() => setOpenAlert(false)}
//           >
//             <CubeTransparentIcon className="mb-4 h-12 w-12" />
//             <Typography variant="h6" className="mb-1">
//               Upgrade to PRO
//             </Typography>
//             <Typography variant="small" className="font-normal opacity-80">
//               Upgrade to Material Tailwind PRO and get even more components,
//               plugins, advanced features and premium.
//             </Typography>
//             <div className="mt-4 flex gap-3">
//               <Typography
//                 as="a"
//                 href="#"
//                 variant="small"
//                 className="font-medium opacity-80"
//                 onClick={() => setOpenAlert(false)}
//               >
//                 Dismiss
//               </Typography>
//               <Typography
//                 as="a"
//                 href="#"
//                 variant="small"
//                 className="font-medium"
//               >
//                 Upgrade Now
//               </Typography>
//             </div>
//           </Alert> */}
//         </Card>
//       </Drawer>
//     </>
//   );
// }