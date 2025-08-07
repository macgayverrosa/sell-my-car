// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";

// interface CardProps {
//   content: any;
//   header?: any;
//   footer?: any;
//   menu?: any;
//   tool?: any;
// }

// // function FCMenu() {
// //   return (
// //     <DropdownMenu>
// //       <DropdownMenuTrigger asChild>
// //         <Button size="icon" className="h-8 w-8">
// //           <MoreVertical className="h-3.5 w-3.5" />
// //           <span className="sr-only">More</span>
// //         </Button>
// //       </DropdownMenuTrigger>
// //       <DropdownMenuContent align="end">
// //         {/* <DropdownMenuItem>Edit</DropdownMenuItem> */}
// //         <DropdownMenuItem>Export</DropdownMenuItem>
// //         {/* <DropdownMenuSeparator /> */}
// //         {/* <DropdownMenuItem>Trash</DropdownMenuItem> */}
// //       </DropdownMenuContent>
// //     </DropdownMenu>
// //   );
// // }

// export default function CustomCard(props: CardProps) {
//   return (
//     <Card>
//       {props.header && (
//         <CardHeader className="flex flex-row items-start bg-muted/50">
//           <div className="grid gap-0.5">
//             <CardTitle className="group flex items-center gap-2 text-2xl">
//               {props.header}
//             </CardTitle>
//             {/* <CardDescription>ID: November 23, 2023</CardDescription> */}
//           </div>
//           <div className="ml-auto flex items-center gap-1">
//             {/* {props.menu && <FCMenu />} */}
//             {props.menu}
//           </div>
//         </CardHeader>
//       )}
//       <CardContent className="p-6 text-sm">{props.content}</CardContent>
//       {props.footer && (
//         <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
//           <div className="text-xs text-muted-foreground">
//             Updated <time dateTime="2023-11-23">November 23, 2023</time>
//           </div>
//           <div className="ml-auto mr-0 w-auto">{props.footer}</div>
//         </CardFooter>
//       )}
//     </Card>
//   );
// }
