import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ModelListComponent } from './model-list/model-list.component';
import { TopologyEditorComponent } from './topology-editor/topology-editor.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

import { ListItemData } from './shared/list-item-data';
import { AasServiceService } from './shared/aas-service.service';
import { TopologyItem } from './shared/topology-item';
import { Connection } from './shared/connection';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    ModelListComponent,
    TopologyEditorComponent,
    DetailedViewComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  savedConnections : Connection[] = []
  
  title = 'ecad-topologie-editor';
  
  editorMode = false;

  shownModel: ListItemData = {
    id: 1,
    name: 'Xelity 6TX managed switch 6 port 1000Mbit IP20',
    rawJson: {
        "category": "CONSTANT",
        "idShort": "Nameplate",
        "displayName": [
          {
            "language": "en",
            "text": "Digital Nameplate"
          },
          {
            "language": "de",
            "text": "Digitales Namensschild"
          }
        ],
        "description": [
          {
            "language": "en",
            "text": "Contains the nameplate information attached to the product."
          },
          {
            "language": "de",
            "text": ""
          }
        ],
        "administration": {
          "version": "1",
          "revision": "0",
          "templateId": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
        },
        "id": "https://aas.murrelektronik.com/58822/sm/1/0/nameplate",
        "kind": "Instance",
        "semanticId": {
          "type": "ExternalReference",
          "keys": [
            {
              "type": "GlobalReference",
              "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate"
            }
          ]
        },
        "qualifiers": [],
        "submodelElements": [
          {
            "category": "CONSTANT",
            "idShort": "URIOfTheProduct",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABN590#001 URI of product instance."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAY811#001"
                }
              ]
            },
            "qualifiers": [],
            "valueType": "xs:string",
            "value": "https://aas.murrelektronik.com/58822",
            "modelType": "Property"
          },
          {
            "category": "CONSTANT",
            "idShort": "ManufacturerName",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABA565#007 manufacturer Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAO677#002"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "language": "en",
                "text": "Murrelektronik"
              },
              {
                "language": "de",
                "text": "Murrelektronik"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "ManufacturerProductDesignation",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABA567#007 name of product Note: Short designation of the product is meant. Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAW338#001"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "language": "en",
                "text": "Xelity 6TX managed switch 6 port 1000Mbit IP20"
              },
              {
                "language": "de",
                "text": "Xelity 6TX Managed Switch 6 Port 1000Mbit IP20"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "ContactInformation",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "The SMC “ContactInformation” contains information on how to contact the manufacturer or an authorised service provider, e.g. when a maintenance service is required. Note: physical address is a mandatory Property according to EU Machine Directive 2006/42/EC"
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "category": "CONSTANT",
                "idShort": "NationalCode",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61360_4#ADA005#001 country code. country codes defined accord. to DIN EN ISO 3166-1 alpha-2 codes. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO134#002"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "DE"
                  },
                  {
                    "language": "de",
                    "text": "DE"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "CityTown",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA129#001 city/town. Mandatory Property according to EU Machine Directive 2006/42/EC."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO132#002"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Oppenweiler"
                  },
                  {
                    "language": "de",
                    "text": "Oppenweiler"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "Company",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAW001#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "Department",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO127#003"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "language": "en",
                    "text": "Sales"
                  },
                  {
                    "language": "de",
                    "text": "Sales"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "IPCommunication{00}",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "AddressOfAdditionalLink",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAQ326#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "valueType": "xs:string",
                    "value": "shop@murrelektronik.de",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "AvailableTime",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/AvailableTime/"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "value": [
                      {
                        "language": "en",
                        "text": "Monday – Friday 07:30 to 17:00"
                      },
                      {
                        "language": "de",
                        "text": "Monday – Friday 07:30 to 17:00"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "TypeOfCommunication",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/1/0/ ContactInformations/ContactInformation/IPCommunication/TypeOfCommunication"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "valueType": "xs:string",
                    "value": "",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Phone",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "https://admin-shell.io/zvei/nameplate/1/0/ContactInformations/ContactInformation/Phone"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "TelephoneNumber",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO136#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "+49 7191 47-4490"
                      },
                      {
                        "language": "de",
                        "text": "+49 7191 47-4490"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "TypeOfTelephone",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": " enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS755#001 (office mobile), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home), 0173-1#07-AAS759#001 (private mobile)"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO137#003"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "0173-1#07-AAS754#001",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Fax",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAQ834#005"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "FaxNumber",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO195#002"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": [
                      {
                        "language": "en",
                        "text": "+49 7191 47-494490"
                      },
                      {
                        "language": "de",
                        "text": "+49 7191 47-494490"
                      }
                    ],
                    "modelType": "MultiLanguageProperty"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "TypeOfFaxNumber",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS758#001 (home)"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO196#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "valueType": "xs:string",
                    "value": "0173-1#07-AAS754#001",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Email",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAQ836#005"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "EmailAddress",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO198#002"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "One"
                      }
                    ],
                    "valueType": "xs:string",
                    "value": "info@murrelektronik.de",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "TypeOfEmailAddress",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "enumeration: 0173-1#07-AAS754#001 (office), 0173-1#07-AAS756#001 (secretary), 0173-1#07-AAS757#001 (substitute), 0173-1#07-AAS758#001 (home)"
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0173-1#02-AAO199#003"
                        }
                      ]
                    },
                    "qualifiers": [
                      {
                        "type": "Multiplicity",
                        "valueType": "xs:string",
                        "value": "ZeroToOne"
                      }
                    ],
                    "valueType": "xs:string",
                    "value": "0173-1#07-AAS754#001",
                    "modelType": "Property"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Street",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA286#001 street. Mandatory Property according to EU Machine Directive 2006/42/EC"
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO128#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "Falkenstraße 3"
                  },
                  {
                    "language": "de",
                    "text": "Falkenstraße 3"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "Zipcode",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABA281#001 ZIP/Postal code. Mandatory Property according to EU Machine Directive 2006/42/EC. Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO129#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "One"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "71570"
                  },
                  {
                    "language": "de",
                    "text": "71570"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "POBox",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO130#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "P.O. Box 1165"
                  },
                  {
                    "language": "de",
                    "text": "P.O. Box 1165"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "ZipCodeOfPOBox",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO131#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "1165"
                  },
                  {
                    "language": "de",
                    "text": "1165"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              },
              {
                "category": "CONSTANT",
                "idShort": "StateCounty",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#02-AAO133#002"
                    }
                  ]
                },
                "qualifiers": [
                  {
                    "type": "Multiplicity",
                    "valueType": "xs:string",
                    "value": "ZeroToOne"
                  }
                ],
                "value": [
                  {
                    "language": "en",
                    "text": "Baden-Württemberg"
                  },
                  {
                    "language": "de",
                    "text": "Baden-Württemberg"
                  }
                ],
                "modelType": "MultiLanguageProperty"
              }
            ],
            "modelType": "SubmodelElementCollection"
          },
          {
            "category": "CONSTANT",
            "idShort": "ManufacturerProductRoot",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAU732#001"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "language": "en",
                "text": "Network Technology"
              },
              {
                "language": "de",
                "text": "Netzwerktechnik"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "ManufacturerProductFamily",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: conditionally mandatory Property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAU731#001"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "language": "en",
                "text": "Network component"
              },
              {
                "language": "de",
                "text": "Netzwerkkomponente"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "ManufacturerProductType",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABA300#006 code of product Note: conditionally mandatory Property according to EU Machine Directive 2006/42/EC. One of the two properties must be provided: ManufacturerProductFamily (0173-1#02-AAU731#001) or ManufacturerProductType (0173-1#02-AAO057#002). "
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAO057#002"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "language": "en",
                "text": "Managed switch"
              },
              {
                "language": "de",
                "text": "Managed Switch"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "OrderCodeOfManufacturer",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABA950#006 order code of product Note: Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAO227#002"
                }
              ]
            },
            "qualifiers": [
              {
                "type": "Multiplicity",
                "valueType": "xs:string",
                "value": "ZeroToOne"
              }
            ],
            "value": [
              {
                "language": "en",
                "text": "58822"
              },
              {
                "language": "de",
                "text": "58822"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "ProductArticleNumberOfManufacturer",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: see also [IRDI] 0112/2///61987#ABA581#006 article number Note: Recommendation: Property declaration as MLP is required by its semantic definition. As the Property value is language independent, users are recommended to provide maximal 1 string in any language of the user’s choice."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAO676#003"
                }
              ]
            },
            "qualifiers": [
              {
                "type": "Multiplicity",
                "valueType": "xs:string",
                "value": "ZeroToOne"
              }
            ],
            "value": [
              {
                "language": "en",
                "text": "58822"
              },
              {
                "language": "de",
                "text": "58822"
              }
            ],
            "modelType": "MultiLanguageProperty"
          },
          {
            "category": "CONSTANT",
            "idShort": "YearOfConstruction",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: mandatory Property according to EU Machine Directive 2006/42/EC. "
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#02-AAP906#001"
                }
              ]
            },
            "qualifiers": [],
            "valueType": "xs:string",
            "value": "2024",
            "modelType": "Property"
          },
          {
            "category": "CONSTANT",
            "idShort": "CompanyLogo",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/CompanyLogo"
                }
              ]
            },
            "qualifiers": [],
            "value": "/aasx/suppl/Murrelektronik_Logo.png",
            "contentType": "image/png",
            "modelType": "File"
          },
          {
            "category": "CONSTANT",
            "idShort": "Markings",
            "displayName": [
              {
                "language": "en",
                "text": ""
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "description": [
              {
                "language": "en",
                "text": "Note: CE marking is declared as mandatory according to EU Machine Directive 2006/42/EC."
              },
              {
                "language": "de",
                "text": ""
              }
            ],
            "semanticId": {
              "type": "ExternalReference",
              "keys": [
                {
                  "type": "GlobalReference",
                  "value": "0173-1#01-AGZ673#001"
                }
              ]
            },
            "qualifiers": [],
            "value": [
              {
                "category": "CONSTANT",
                "idShort": "Marking",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AHD206#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingName",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "CE Marking",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "DesignationOfCertificateOrApproval",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0112/2///61987#ABH783#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "https://shop.murrelektronik.com/7000-40021-6340500/CE",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingFile",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": "/aasx/suppl/ce-mark.png",
                    "contentType": "image/png",
                    "modelType": "File"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Marking",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AHD206#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingName",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "UKCA Marking",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "DesignationOfCertificateOrApproval",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0112/2///61987#ABH783#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "https://shop.murrelektronik.com/7000-40021-6340500/",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingFile",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": "/aasx/suppl/UKCA.png",
                    "contentType": "image/png",
                    "modelType": "File"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              },
              {
                "category": "CONSTANT",
                "idShort": "Marking",
                "displayName": [
                  {
                    "language": "en",
                    "text": ""
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "description": [
                  {
                    "language": "en",
                    "text": "Note: see also [IRDI] 0112/2///61987#ABH515#003 Certificate or approval Note: CE marking is declared as mandatory according to the Blue Guide of the EU-Commission "
                  },
                  {
                    "language": "de",
                    "text": ""
                  }
                ],
                "semanticId": {
                  "type": "ExternalReference",
                  "keys": [
                    {
                      "type": "GlobalReference",
                      "value": "0173-1#01-AHD206#001"
                    }
                  ]
                },
                "qualifiers": [],
                "value": [
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingName",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: see also [IRDI] 0173-1#02-BAB392#015 certificate/approval valueId with ECLASS enumeration IRDI is preferable, e.g. [IRDI] 0173-1#07-DAA603#004 for CE. If no IRDI available, string value can also be accepted. Note: CE marking is declared as mandatory according to Blue Guide of the EU-Commission "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingName"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "UL Marking",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "DesignationOfCertificateOrApproval",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": "Note: Approval identifier, reference to the certificate number, to be entered without spaces "
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "0112/2///61987#ABH783#001"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "valueType": "xs:string",
                    "value": "https://shop.murrelektronik.com/7000-40021-6340500/UL",
                    "modelType": "Property"
                  },
                  {
                    "category": "CONSTANT",
                    "idShort": "MarkingFile",
                    "displayName": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "description": [
                      {
                        "language": "en",
                        "text": ""
                      },
                      {
                        "language": "de",
                        "text": ""
                      }
                    ],
                    "semanticId": {
                      "type": "ExternalReference",
                      "keys": [
                        {
                          "type": "GlobalReference",
                          "value": "https://admin-shell.io/zvei/nameplate/2/0/Nameplate/Markings/Marking/MarkingFile"
                        }
                      ]
                    },
                    "qualifiers": [],
                    "value": "/aasx/suppl/UL.PNG",
                    "contentType": "image/png",
                    "modelType": "File"
                  }
                ],
                "modelType": "SubmodelElementCollection"
              }
            ],
            "modelType": "SubmodelElementCollection"
          }
        ],
        "modelType": "Submodel"
      }
  };

  itemList: ListItemData[] = [];
  idIncrementor: number = 0;

  switchShownModel(listItemData: ListItemData) {
    this.shownModel = listItemData;
  }
  addItemToEditor(listItemData: ListItemData) {
    this.topologyItems.push({id: this.idIncrementor++, content: listItemData, position: {x: 0, y: 0}});
  }

  removeItem(id: number) {
    this.topologyItems = this.topologyItems.filter((item) => item.id != id)
  }

  topologyItems: TopologyItem[] = [];

  filterItems(filter: string) {
    this.itemList = this.service.getItems(filter);
  }
  switchMode() {
    this.editorMode = !this.editorMode;
  }

  saveConnections(connections: Connection[]) {
    this.savedConnections = connections
  }

  constructor(private service: AasServiceService) {
    this.filterItems('');
  }
}
